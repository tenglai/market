/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/**----导入外部的组件----**/
var Main = require('./XMGMain');

var Launch = React.createClass({
    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}/>
        );
    },

    // 复杂的操作:定时器\网络请求
    componentDidMount(){
        // 定时: 隔2s切换到Main
        setTimeout(()=>{
            // 页面的切换
            this.props.navigator.replace({
                component: Main, // 具体路由的版块
            });
        }, 1500);
    }
});


const styles = StyleSheet.create({
    launchImageStyle:{
        flex:1
    }
});

// 输出组件类
module.exports = Launch;
