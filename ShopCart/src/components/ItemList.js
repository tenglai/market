/**
 * 列表组件
 */
import React, { Component } from 'react';
import {
	AppState,
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
		height: 44,
		backgroundColor: '#F5F5F5',
		justifyContent: 'space-between',
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
	},
	back: {
		fontSize: 30,
		color: '#900',
	},
	right: {
		fontSize: 30,
		color: 'transparent',
	}
});

export default class ItemList extends Component {
	goBack = () => {
		// 通过解钩 获取传递的navigator
		const { navigator } = this.props;
		navigator.pop();
	};
	render() {
		return (
			<View style={styles.root}>
			</View>
		);
	}
}
