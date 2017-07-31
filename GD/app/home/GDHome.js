/**
 * 首页
 */
import React, { Component } from 'react';
import {
  	StyleSheet,
  	Text,
  	View,
} from 'react-native';

export default class GDHome extends Component {
	// render 返回该组件显示的内容
  	render() {
    	return (
    		<View style={styles.container}>

    		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
	},
});

