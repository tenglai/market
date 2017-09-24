/**
 * 封装 图表组件
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Dimensions,
    DeviceEventEmitter, // 通知
} from 'react-native';

import PropTypes from 'prop-types';

// 获取屏幕宽高
const {width, height} = Dimensions.get('window');

// 引入 echart组件
import Echarts from 'native-echarts';
 
export default class CommunalChart extends Component {
    // 定义成员属性
    static propTypes = {
        title:PropTypes.string, // 标题
        legend:PropTypes.array, 
        statistics:PropTypes.array // 数据
    };

    onPressone(data){
        // 发送通知
        DeviceEventEmitter.emit('responseName', data);
    }

    // 渲染
    render() {
        const option = {
            title : {
                text: this.props.title,
                x:'center',
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.props.legend,
                y:'90'
            },
            series : [
                {
                    name: '人数',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: this.props.statistics,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        return (
            <Echarts option={option} height={height} onPressone={(data) => {this.onPressone(data)}} />
        );
    }
}
