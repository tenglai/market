/**
 * 列表组件
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	ScrollView
} from 'react-native';

// 引入Item组件
import Item from './Item';

const styles = StyleSheet.create({
	root: {
		flex: 1,
	}
});

// 引入购物车数据
import cartData from '../logics/CartData';

export default class ItemList extends Component {
	render() {
		// 取出父组件传递的参数
		const { cartData } = this.props;

		// 动态创建组件
		return (
			<ScrollView style={styles.root}>
				{
					cartData.map((data,index) => {
						return <Item key={data.id} index={index} data={data} cartData={cartData} />
					})
				}
			</ScrollView>
		);
	}
}
