/*
	6.实现功能：封装导航器初始化设置

	包含组件：Navigator

	外部传入：
		component  需要展示的页面组件
		route对象  必须添加component属性; 如果需要传值可以添加passProps属性
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

// npm install react-native-deprecated-custom-components --save

import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components';

var Navigation = React.createClass({
	render: function() {
		// 创建route对象,约定格式
		var rootRoute = {
			component: this.props.component,
			passProps: {
				
			}
		};

		return (
			<Navigator
				initialRoute={rootRoute}
				configureScene={() => {return Navigator.SceneConfigs.PushFromRight}}
				renderScene={(route,navigator) => {
					var Component = route.component;
					return (
						<View style={{flex:1}}>
							<Component
								navigator={navigator}
								route={route}
								{...route.passProps}/>
						</View>
					);
				}}/>
		);
	}
});

module.exports = Navigation;