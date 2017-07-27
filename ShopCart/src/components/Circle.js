/**
 * 勾选框组件
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
	select: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderColor: '#000',
		borderWidth: StyleSheet.hairlineWidth,
	},
	checked: {
		backgroundColor: '#f23030',
	},
});

export default class Circle extends Component {
	select = () => {
		// 通过props,从父组件取出onPress
		const { onPress } = this.props;
		// 赋值
		let { checked } = this.state;
		// 值相等的情况,es6的简写 checked:checked,只写一个checked,
		this.setState({
			checked,
		});
		// 判断onPress是否存在,存在则执行下面的代码
		onPress && onPress(checked);
	};
	state = {
		checked: false,
	};
	render() {
		<TouchableOpacity
			style={[styles.select, this.state.checked && styles.checked]}
			onPress={this.select}
		/>
	}
}
