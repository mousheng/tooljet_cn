import React, { useState, useEffect, useRef } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { resolveReferences, resolveWidgetFieldValue, isJson } from '@/_helpers/utils';

export const Autocomplete = function Autocomplete({
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
    const [searchFirstPY, setSearchFirstPY] = useState(properties.searchFirstPY);
    const [searchAllPY, setSearchAllPY] = useState(properties.searchAllPY);
    const [subTitleKey, setSubTitleKey] = useState(properties.subTitleKey);
    const [titleKey, setTitleKey] = useState(properties.titleKey);
    const [datas, setDatas] = useState(properties.datas);
    const [processedData, setProcessedData] = useState('');
    const [placeholder, setPlaceholder] = useState(properties.placeholder);
    const [maxResults, setMaxResults] = useState(properties.maxResults);
    const [titleDisplayName, setTitleDisplayName] = useState(properties.titleDisplayName);
    const [subTitleDisplayName, setSubTitleDisplayName] = useState(properties.subTitleDisplayName);
    const [fuseOptions, setFuseOptions] = useState({})

    useEffect(() => {
        setDatas(properties.datas)
    }, [properties.datas])

    useEffect(() => {
        const temps = datas.map(i => {
            return {
                ...i,
                _FullPY_: properties.searchAllPY ? i[titleKey]?.spell() + '|' + i[subTitleKey]?.spell() : '',
                _FirstPY_: properties.searchFirstPY ? i[titleKey]?.spell('first') + '|' + i[subTitleKey]?.spell('first') : '',
            }
        })
        setProcessedData(temps)
        setSearchFirstPY(properties.searchFirstPY)
        setSearchAllPY(properties.searchAllPY)
        setTitleKey(properties.titleKey)
        setSubTitleKey(properties.subTitleKey)
        let FuseKeys = [properties.titleKey, properties.subTitleKey]
        if (searchAllPY) FuseKeys.push('_FullPY_')
        if (searchFirstPY) FuseKeys.push('_FirstPY_')
        setFuseOptions({ keys: FuseKeys })
    }, [datas, properties.searchAllPY, properties.searchFirstPY, properties.titleKey, properties.subTitleKey])

    useEffect(() => {
        setPlaceholder(properties.placeholder)
    }, [properties.placeholder])

    useEffect(() => {
        setMaxResults(properties.maxResults)
    }, [properties.maxResults])

    useEffect(() => {
        setTitleDisplayName(properties.titleDisplayName)
    }, [properties.titleDisplayName])

    useEffect(() => {
        setSubTitleDisplayName(properties.subTitleDisplayName)
    }, [properties.subTitleDisplayName])
    
    useEffect(() => {
        setVisibility(styles.visibility)
        setDisabledState(styles.disabledState)
    }, [styles.visibility, styles.disabledState])

    const handleOnSearch = (string, results) => {
        setExposedVariable('searchText', string)
        fireEvent('onSearchTextChanged');
    }

    const handleOnHover = (result) => {
        setExposedVariable('hoverItem', result)
        fireEvent('onHover');
    }

    const handleOnSelect = (item) => {
        setExposedVariable('selectedItem', item)
        fireEvent('onSelect');
    }

    const handleOnFocus = () => {
        fireEvent('onFocus');
    }

    const formatResult = (item) => {
        return (
            <div style={{ borderBottom: '1px solid #A8A8A850' }}>
                <span style={{ display: 'block', textAlign: 'left' }}>{titleDisplayName}{item.title}</span>
                {subTitleDisplayName !== '-' ? (<span style={{ display: 'block', textAlign: 'left', color: '#A8A8A8' }}>{subTitleDisplayName} {item.subTitle}</span>) : ''}
            </div>
        )
    }

    return (<div data-disabled={disabledState} style={{ width: width - 5, height, display: visibility ? '' : 'none' }}>
        <header className="App-header">
            <div>
                <ReactSearchAutocomplete
                    styling={{ width: '100%', height: `${height - 2}px`, backgroundColor: darkMode ? 'rgb(31,40,55)' : 'white', }}
                    items={processedData}
                    placeholder={placeholder}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    fuseOptions={fuseOptions}
                    formatResult={formatResult}
                    resultStringKeyName={titleKey}
                    showNoResultsText='无结果'
                    maxResults={maxResults}
                    showIcon={true}
                />
            </div>
        </header>
    </div>)
}