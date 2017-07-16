/*
	7.实现功能：封装WebView,根据传入的url展示网页信息

	包含组件：Header、WebView

	外部传入：
		给Header设置：navigator、initObj(backName、title)
		给WebView设置：source(url)
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	WebView
} from 'react-native';

var Header = require("./header");

var CustomWebView = React.createClass({
	render: function() {
		return (
			<View style={{backgroundColor:"white",flex:1}}>
				<Header 
					navigator={this.props.navigator}
					initObj={{
						backName:this.props.backName,
						barTitle:this.props.title
					}}/>
				<WebView
					startInLoadingState={true}
					contentInset={{top:-44,bottom:-120}}
					source={{uri:this.props.url}}/>
			</View>
		);
	}
});

module.exports = CustomWebView;