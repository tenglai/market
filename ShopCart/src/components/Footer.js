/**
 * 底部组件
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
		position: 'absolute',
		bottom: 0,
		left: 0,  // 设置left、right为0,可实现width:100%的效果
		right: 0,
		justifyContent: 'center',
		flexDirection: 'row',
		height: 44,
		backgroundColor: '#F5F5F5',
		justifyContent: 'space-between',
		borderTopWidth: StyleSheet.hairlineWidth, // 解决1px问题,专门用来设置边界值
		alignItems: 'center', // 元素居中
	},
	selectWrapper: {
		flexDirection: 'row', // 设置主轴为横向
		alignItems: 'center',
		marginLeft: 20,
	},
	checked: {
		backgroundColor: '#f23030',
	},
	selectText: {
		marginLeft: 5,
	},
	checkout: {
		backgroundColor: '#f23030',
		paddingHorizontal: 20,
		height: 50,
		justifyContent: 'center',
	},
	checkoutText: {
		fontSize: 18,
		color: '#fff',
	}
});

import Circle from '../components/Circle';

export default class Footer extends Component {
	// 构造器  状态
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		//
	// 	}
	// }
	goBack = () => {
		// 通过解钩 获取传递的navigator
		const { navigator } = this.props;
		navigator.pop();
	};
	selectAll = (checked) => {
		// 获取子组件返回值
		alert(checked);
	};
	render() {
		return (
			<View style={styles.root}>
				<View style={styles.selectWrapper}>
					<Circle onPress={this.selectAll} />
					<Text style={styles.selectText}>全选</Text>
				</View>
				<Text>总计：￥</Text>
				<TouchableOpacity
					// 状态不同显示的样式不同
					style={styles.checkout}
					onPress={this.checkout}
				>
					<Text style={styles.checkoutText}>去结算(0)</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
