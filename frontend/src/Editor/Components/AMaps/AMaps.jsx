import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { Map } from '@uiw/react-amap-map';
import { APILoader } from '@uiw/react-amap-api-loader';
import { AutoComplete } from '@uiw/react-amap-auto-complete';
import { Marker } from '@uiw/react-amap-marker';
import { ScaleControl } from '@uiw/react-amap-scale-control';
import { Geolocation } from '@uiw/react-amap-geolocation';
import { resolveReferences, resolveWidgetFieldValue,isJson } from '@/_helpers/utils';

export const AMaps = function AMaps({
    id,
    width,
    height,
    component,
    darkMode,
    currentState,
    onComponentOptionChanged,
    onComponentOptionsChanged,
    onEvent,
    // canvasWidth,
    registerAction,
    dataCy,
}) {
    // 中心点原值
    const center = component.definition.properties.initialLocation.value;
    // 默认标记原值
    const defaultMarkerValue =component.definition.properties.defaultMarkers.value instanceof Array? component.definition.properties.defaultMarkers.value : resolveReferences(component.definition.properties.defaultMarkers.value,currentState) ;
    //默认标记是否为JSON常数
    const defaultMarkerValueTypeIsJson=isJson( component.definition.properties.defaultMarkers.value.replace('{{','').replace('}}',''))
    // api密钥
    const mapSecurityKey = component.definition.properties.mapSecurityKey.value;
    //设置地图密钥
    if (!window._AMapSecurityConfig && mapSecurityKey!='{{}}') {
        window._AMapSecurityConfig = {
            securityJsCode: mapSecurityKey,
        }
    }
    const addNewMarkersProp = component.definition.properties.addNewMarkers;
    const canAddNewMarkers = addNewMarkersProp ? resolveReferences(addNewMarkersProp.value, currentState) : false;
    const zoom = component.definition.properties.zoom.value == '{{}}' ? 1 : resolveReferences(component.definition.properties.zoom.value, currentState);
    const canSearchProp = component.definition.properties.canSearch;
    const canSearch = canSearchProp ? resolveReferences(canSearchProp.value, currentState) : false;
    const widgetVisibility = component.definition.styles?.visibility?.value ?? true;
    const disabledState = component.definition.styles?.disabledState?.value ?? false;
    const geolocation = resolveReferences(component.definition.properties.geolocation.value, currentState);
    const showScaleControl = resolveReferences(component.definition.properties.showScaleControl.value, currentState);
    const showCenterMarker = resolveReferences(component.definition.properties.showCenterMarker.value, currentState);
    const parsedDisabledState =
        typeof disabledState !== 'boolean' ? resolveWidgetFieldValue(disabledState, currentState) : disabledState;
    const mapApiKey = component.definition.properties.mapApiKey.value;
    const enableDelete = resolveReferences(component.definition.properties.enableDelete.value, currentState);
    let parsedWidgetVisibility = widgetVisibility;
    try {
        parsedWidgetVisibility = resolveReferences(parsedWidgetVisibility, currentState, []);
    } catch (err) {
        console.log(err);
    }
    const [mapCenter, setMapCenter] = useState(resolveReferences(center, currentState));
    const [markers, setMarkers] = useState(resolveReferences(defaultMarkerValue, currentState));
    const [inputText, setInput] = useState();
    
    if(!defaultMarkerValueTypeIsJson && !_.isEqual(defaultMarkerValue,markers)){
        setMarkers(defaultMarkerValue)
    }

    function handleMapClick(e) {
        if (!canAddNewMarkers) {
            return;
        }
        const lat = e.lnglat.lat;
        const lng = e.lnglat.lng;
        const newMarkers = markers;
        newMarkers.push({ lat, lng });
        setMarkers(newMarkers);
        onComponentOptionChanged(component, 'markers', newMarkers).then(() => onEvent('onCreateMarker', { component }));
    }

    function addMapUrlToJson(centerJson) {
        centerJson.AMapUrl = `https://ditu.amap.com/regeo?lng=${centerJson?.lng}&lat=${centerJson?.lat}`;
        return centerJson;
    }

    function handleBoundsChange(e) {
        const mapBounds = e.target.getBounds();
        const bounds = {
            northEast: mapBounds.getNorthEast()?.toJSON(),
            southWest: mapBounds.getSouthWest()?.toJSON(),
        };
        const newCenter = {
            lng: e.target.getCenter().lng,
            lat: e.target.getCenter().lat
        }
        setMapCenter(newCenter);
        onComponentOptionsChanged(component, [
            ['bounds', bounds],
            ['center', addMapUrlToJson(newCenter)],
        ]).then(() => onEvent('onBoundsChange', { component }));
    }

    useEffect(() => {
        const resolvedCenter = resolveReferences(center, currentState);
        setMapCenter(resolvedCenter);
        onComponentOptionsChanged(component, [['center', addMapUrlToJson(resolvedCenter)]]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [center]);

    function handleMarkerClick(index) {
        onComponentOptionChanged(component, 'selectedMarker', markers[index]).then(() =>
            onEvent('onMarkerClick', { component })
        );
    }
    function handleMarkerDelete(index) {
        if (!enableDelete) return;
        onComponentOptionChanged(component, 'RightClickMarker', { marker: markers[index], index: index }).then(() => {
            markers.splice(index, 1)
            setMapCenter({
                lng: mapCenter.lng,
                lat: mapCenter.lat,
            })
            onEvent('onMarkerRightClick', { component })
        }
        );
    }

    registerAction(
        'setLocation',
        async function (lat, lng) {
            if (lat && lng) setMapCenter(resolveReferences({ lat, lng }, currentState));
        },
        [setMapCenter]
    );

    function handleSelectList(opts) {
        setMapCenter(resolveReferences({ lat: opts.poi.location.lat, lng: opts.poi.location.lng }, currentState))
    }
    return (
        <div
            data-disabled={parsedDisabledState}
            style={{ height, display: parsedWidgetVisibility ? '' : 'none' }}
            className="map-widget"
            data-cy={dataCy}
        >
            <div
                className="map-center"
                style={{
                    right: width * 0.5 - 18,
                    top: height * 0.5 - 50,
                    display: showCenterMarker ? '' : 'none'
                }}
            >
                <img className="mx-2 unselectable pointer-events-none" src="assets/images/icons/marker.svg" width="24" height="64" />
            </div>
            <APILoader akey={mapApiKey || '2c33ea6639bc405915cffb2670768dc1'} version="2.0">
                {canSearch && (
                    <>
                        <input type="text" placeholder='请输入搜索地点' onChange={(e) => setInput(e.target)} className={`map-search-box place-search-input ${darkMode && 'text-light bg-dark dark-theme-placeholder'}`} />
                        {inputText && (
                            <AutoComplete
                                input={inputText}
                                onSelect={handleSelectList}
                            />
                        )}

                    </>
                )}
                <Map
                    mapStyle={darkMode ? "amap://styles/darkblue" : "amap://styles/normal"}
                    onClick={handleMapClick}
                    onDragEnd={handleBoundsChange}
                    center={[mapCenter.lng, mapCenter.lat]}
                    zoom={parseFloat(zoom)}
                >
                    {/* 标记 */}
                    {Array.isArray(markers) && (
                        <>
                            {markers.map((marker, index) => (
                                <Marker key={index} position={[marker.lng, marker.lat]} onClick={() => handleMarkerClick(index)} onRightClick={() => handleMarkerDelete(index)} />
                            ))}
                        </>
                    )}
                    {/* 比例尺 */}
                    {showScaleControl && (<ScaleControl
                        // visiable={show}
                        offset={[20, 20]}
                        position="LB"
                    />)}
                    {geolocation && (<>
                        <div style={{ display: geolocation ? '' : 'none' }}>
                            <Geolocation
                                // 是否使用高精度定位，默认:true
                                enableHighAccuracy={true}
                                // 超过10秒后停止定位，默认：5s
                                timeout={5000}
                                // 是否显示定位误差范围
                                showCircle={false}
                                // 是否显示点位按钮
                                showButton={true}
                                // 定位成功后是否自动调整地图缩放视野到定位点
                                zoomToAccuracy={false}
                                onComplete={(data) => {
                                    // console.log('返回数据：', setData, data);
                                    setMapCenter({
                                        lng: data.position.lng,
                                        lat: data.position.lat,
                                    })
                                    // setData(data);
                                }}
                                onError={(data) => {
                                    console.log('错误返回数据：', data);
                                    // setData(data);
                                }}
                            />
                        </div>
                    </>
                    )}
                </Map>
            </APILoader>
        </div>
    );
};
