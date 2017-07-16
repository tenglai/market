/*
	2.定义工具类

	实现功能：定义多个属性，在项目中会使用的一些功能。包括：获取屏幕尺寸、loading组件、GET请求方法

	包含组件：

	外部引用：

		GET请求方法需要从外部引入url、请求成功的回调方法、请求失败的回调方法。
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Dimensions, // 用于获取设备屏幕的宽高
	ActivityIndicator // loading组件
} from 'react-native';

// 定义对象,将提供的功能作为属性存放
var Util = {
	// 屏幕尺寸
	windowSize: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},

	// 基于fetch的get方法  只负责下载数据,下载后的处理操作在回调方法中实现
	// successCallback 数据下载成功的回调方法,在组件中实现
	// failCallback 数据下载失败的回调方法,在组件中实现
	getRequest: function(url, successCallback, failCallback) {
		fetch(url)
			.then((response) => response.json())
			.then((responseData) => successCallback(responseData))
			.catch((error) => failCallback(error));
	},

	// loading效果
	loading: <ActivityIndicator style={{marginTop:200}} />
}

// 导出
module.exports = Util;