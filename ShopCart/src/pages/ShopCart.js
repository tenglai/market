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
				<ItemList />
				<Footer />
			</View>
		);
	}
}