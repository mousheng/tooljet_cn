import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Carousels = function Carousels({
    id,
    width,
    height,
    component,
    darkMode,
    currentState,
    onComponentOptionChanged,
    onComponentOptionsChanged,
    setExposedVariable,
    onEvent,
    canvasWidth,
    registerAction,
    properties,
    styles,
    fireEvent,
}) {
    const [visibility, setVisibility] = useState(styles.visibility);
    const [disabledState, setDisabledState] = useState(styles.disabledState);

    const [data, setDatas] = useState(properties?.data);
    const [fade, setFade] = useState(properties.fade);
    const [defaultIndex, setDefaultIndex] = useState(properties?.defaultIndex || 0);
    const [interval, setInterval] = useState(properties?.interval || 1000);

    const [dark, setDark] = useState(styles.dark);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setFade(properties.fade)
        setDefaultIndex(properties?.defaultIndex || 0)
        setInterval(properties?.interval || 1000)
    }, [
        properties.fade,
        properties.defaultIndex,
        properties.interval,
    ])



    useEffect(() => {
        setIndex(defaultIndex)
    }, [defaultIndex])

    useEffect(() => {
        setExposedVariable('currentIndex',index)
    }, [index])

    useEffect(() => {
        setDatas(properties.data)
    }, [properties.data])

    useEffect(() => {
        setVisibility(styles.visibility)
        setDisabledState(styles.disabledState)
        setDark(styles.dark)
    }, [
        styles.visibility,
        styles.disabledState,
        styles.dark

    ])

    // 注册自定义事件
    registerAction(
        'setIndex',
        async function (index) {
            setExposedVariable('currentIndex',index)
            setIndex(index)
        },
        [setIndex]
    );

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        fireEvent('onTabSwitch')
      };


    return (<div data-disabled={disabledState} style={{ width: width - 5, height, display: visibility ? '' : 'none' }}>
        <Carousel
            variant={dark ? 'dark' : ''}
            fade={fade}
            activeIndex={index}
            onSelect={handleSelect}
            interval={interval}
        >
            {
                data.map((item, index) =>
                (<Carousel.Item>
                    <img
                        style={{ height }}
                        className="d-block w-100"
                        src={item?.src || ''}
                    />
                    <Carousel.Caption>
                        <h3>{item?.title || ''}</h3>
                        <p>{item?.subTitle || ''}</p>
                    </Carousel.Caption>
                </Carousel.Item>)
                )}
        </Carousel>
    </div>)
}