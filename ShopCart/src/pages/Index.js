import React, { Component } from 'react';
import {
	AppState,
	StyleSheet,
	View,
	Button,
	Text
} from 'react-native';

const INITIAL_ROUTE = {
	location:'/splash',
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
	}
});

// 导入ShopCart
import ShopCart from './ShopCart';

export default class App extends Component {
	gotoShopCart = () => {
		// 通过解钩 获取传递的navigator
		const { navigator } = this.props;
		// push方法会经过navigator的renderScene方法
		navigator.push({
			component: ShopCart
		});
	};
	render() {
		return (
			<View style={styles.root}>
				<Text style={styles.text}>这是首页</Text>
				<Button onPress={this.gotoShopCart}>点这里跳转到购物车</Button>
			</View>
		);
	}
}