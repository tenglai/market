/**
 * 启动页
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/*==============导入外部组件================*/
var Main = require('./Main');

// ES5
var Launch = React.createClass({
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={styles.launchimageStyle} />
        );
    },

    // 组件加载完成
    componentDidMount(){
        // 2秒后切换到Main
        setTimeout(()=>{
            this.props.navigator.replace({
                component:Main
            });
        },2000);
    }
});

const styles = StyleSheet.create({
    launchimageStyle:{
        flex:1,

    }
});

// 输出
module.exports = Launch;
