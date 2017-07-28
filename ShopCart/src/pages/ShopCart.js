/**
 * 购物车
 */
import React, { Component } from 'react';
import {
	AppState,
	StyleSheet,
	View,
	Text
} from 'react-native';

// 引入observer 使静态数据可读写
import { observer } from 'mobx-react/native';
// 引入改造后的数据
import cartData from '../logics/CartData';

// 引入Header
import Header from '../components/Header';
// 引入ItemList
import ItemList from '../components/ItemList';
// 引入Footer
import Footer from '../components/Footer';

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});

export default class ShopCart extends Component {
	render() {
		// ShopCart具有navigator
		const { navigator } = this.props;
		return (
			<View style={styles.root}>
				<Header navigator={navigator} />
				<ItemList cartData={cartData} />
				<Footer cartData={cartData} />
			</View>
		);
	}
}