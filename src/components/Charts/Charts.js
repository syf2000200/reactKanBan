import React from 'react';
import ReactEcharts from 'echarts-for-react';

/**
 * Created by sunyf-c on 2019/8/13.
 */

function GaugeCharts(props) {
    const options = {
        title: {
            show: true,
            text: '',
            x: 'center',
            y: '8%',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18,
                align: 'center'
            },
        },
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [{
            type: props.type,
            // center: ['50%', '25%'], // 默认全局居中
            radius: '55%',
            axisLine: {
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.8, '#0193cf'],
                        [1, 'rgba(1, 147, 207, 0.3)']
                    ],
                    width: 18
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false,
                length: '0',
                width: '0'
            },
            detail: {
                formatter: '{value}%',
                offsetCenter: [0, '5%']
            },
            data: [{
                value: 80,
                name: '',
            }],
        }]
    };

    options.title.text = props.options.name;
    options.series[0].data[0].name = props.options.total;
    options.series[0].data[0].value = props.options.finished != null ? props.options.finished : 0;

    const onChartReady = function(chart) {
        chart.hideLoading();
    }
    return (
        <ReactEcharts
            onChartReady={onChartReady}
            option={options} />
    );
};

export default GaugeCharts;