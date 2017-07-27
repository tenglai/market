/**
 * 头部组件
 * 引用组件 矢量图标 npm install react-native-vector-icons@3.x --save
 * 原生的组件需要link  react-native link
 */
import React, { Component } from 'react';
import {
	AppState,
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

// 引入矢量图标组件
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		height: 44,
		backgroundColor: '#F5F5F5',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
	},
	back: {
		fontSize: 20,
		color: '#900',
	},
	right: {
		fontSize: 20,
		color: 'transparent',
	}
});

export default class Header extends Component {
	goBack = () => {
		// 通过解钩 获取传递的navigator
		const { navigator } = this.props;
		navigator.pop();
	};
	render() {
		return (
			<View style={styles.root}>
				<TouchableOpacity onPress={this.goBack}>
					{/*引入Icon组件*/}
					<Icon name="rocket" style={styles.back} />
				</TouchableOpacity>
				<Text style={styles.text}>购物车</Text>
				<TouchableOpacity>
					{/*引入Icon组件*/}
					<Icon name="rocket" style={styles.right} />
				</TouchableOpacity>
			</View>
		);
	}
}
