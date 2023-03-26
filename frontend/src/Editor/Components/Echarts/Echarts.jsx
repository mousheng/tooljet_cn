import React, { useState, useEffect, useMemo } from 'react';
import { isJson, smartParseJSON } from '@/_helpers/utils';
//引入echats-for-react
import ReactEcharts from 'echarts-for-react';
import _ from 'lodash';



export const Echarts = function Echarts({ width, height, darkMode, properties, styles, dataCy }) {

  const [loadingState, setLoadingState] = useState(false);

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

  const isDescriptionJson = isJson(jsonDescription);

  const jsonChartData = isDescriptionJson ? smartParseJSON(jsonDescription, {}) : {};

  // const fontColor = darkMode ? '#c3c3c3' : null;

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
    };
    return _.assign(option, newData);
  };

  const memoizedChartData = useMemo(
    () => computeChartData(data, dataString),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, dataString, chartType, markerColor, title, padding, showXAxes, showYAxes, showGridLines, darkMode, subTitle]
  );

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
          option={plotFromJson ? jsonChartData : memoizedChartData}      // option：图表配置项
          onChange={() => { }}
          notMerge={true}
          lazyUpdate={true}
          style={{ height: `${height}px` }}
          theme={darkMode ? 'dark' : 'auto'}
        ></ReactEcharts>
      )}
    </div>
  );
};
