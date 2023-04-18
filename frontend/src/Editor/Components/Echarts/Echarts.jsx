import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { isJson, smartParseJSON, resolveReferences } from '@/_helpers/utils';
import "echarts-gl";
//引入echats-for-react
import ReactEcharts from 'echarts-for-react';
import _ from 'lodash';

export const Echarts = function Echarts({ width, height, darkMode, properties, styles, dataCy, onComponentOptionChanged, onEvent, component, fireEvent, currentState }) {

  const [loadingState, setLoadingState] = useState(false);
  const darkModeStyleInJson= {backgroundColor: darkMode ? '#1f2936' : 'white'}
  const { padding, visibility, disabledState } = styles;
  const { subTitle, title, markerColor, showGridLines, type, data, jsonDescription, plotFromJson, showXAxes, showYAxes } = properties;
  //载入状态
  useEffect(() => {
    const loadingStateProperty = properties.loadingState;
    if (loadingStateProperty != undefined) {
      setLoadingState(loadingStateProperty);
    }
  }, [properties.loadingState]);

  // 是否显示及黑夜模式
  const computedStyles = {
    width: width - 4,
    height,
    display: visibility ? '' : 'none',
  };

  //显示图表的数据
  const dataString = data ?? [];
  //图表类型
  const chartType = type;

  const parseJsonData = () => {
    if (plotFromJson) {
      const isDescriptionJson = isJson(jsonDescription);
      if (isDescriptionJson) {
        return _.assign(smartParseJSON(jsonDescription, {}),darkModeStyleInJson)
      } else {
        let parseTemp = resolveReferences(component.definition.properties.jsonDescription.value, currentState)
        if (parseTemp === '') {
          return darkModeStyleInJson
        }
        else {
          return _.assign(parseTemp,darkModeStyleInJson)
        }
      }
    } else {
      return _.assign(memoizedChartData,darkModeStyleInJson)
    }
  }

  // 计算预制图表类型
  const computeChartData = (data, dataString) => {
    let rawData = data;
    if (typeof rawData === 'string') {
      try {
        rawData = smartParseJSON(dataString, {});
      } catch (err) {
        rawData = [];
      }
    }

    if (!Array.isArray(rawData)) {
      rawData = [];
    }

    let newData = [];

    if (chartType === 'pie') {
      newData = {
        series: [
          {
            type: 'pie',
            data: rawData.map((item) => { return { value: item['y'], name: item['x'] } }),
          }
        ],
        legend: {
          orient: 'vertical',
          left: 'right',
          top: '10%',
        },
      }
      if (padding !== 'auto') {
        newData.series[0].bottom = padding
        newData.series[0].left = padding
        newData.series[0].right = padding
        newData.series[0].top = padding
      }
    } else {
      newData = {
        xAxis: {
          type: 'category',
          data: rawData.map(item => item['x']),
          show: showXAxes,      //是否显示x轴
          splitLine: {
            show: showGridLines  // 是否显示网格线
          }
        },
        yAxis: {
          type: 'value',
          show: showYAxes,      //是否显示Y轴
        },
        series: [
          {
            data: rawData.map(item => item['y']),
            type: chartType,
            color: [markerColor],
          }
        ],
      }
      if (padding !== 'auto') {
        newData.grid = {
          containLabel: true,
          left: padding,
          right: padding,
          top: padding,
          bottom: padding,
        }
      }
    }
    const option = {
      backgroundColor: darkMode ? '#1f2936' : 'white',
      tooltip: {
        trigger: 'item'
      },
      title: {
        text: title,
        subtext: subTitle,
        left: 'center'
      },
      // animation: mode == 'edit' ? false : true,
    };
    return _.assign(option, newData);
  };

  const memoizedChartData = useMemo(
    () => computeChartData(data, dataString),
    [data, dataString, chartType, markerColor, title, padding, showXAxes, showYAxes, showGridLines, darkMode, subTitle]
  );

  const handleEvents = useCallback((params) => {
    onComponentOptionChanged(component, 'clickItem', _.pick(params, params.$vars)).then(() => onEvent('onClock', { component }));
    fireEvent('onClick');
  }, []);
  
  return (
    <div data-disabled={disabledState} style={computedStyles} data-cy={dataCy}>
      {loadingState === true ? (
        <div style={{ width }} className="p-2 loader-main-container">
          <center>
            <div className="spinner-border mt-5" role="status"></div>
          </center>
        </div>
      ) : (
        <ReactEcharts
          option={parseJsonData()}      // option：图表配置项
          notMerge={true}
          lazyUpdate={true}
          style={{ height: `${height}px` }}
          theme={darkMode ? 'dark' : 'auto'}
          onEvents={{
            'click': handleEvents,
          }}
        ></ReactEcharts>
      )}
    </div>
  );
};
