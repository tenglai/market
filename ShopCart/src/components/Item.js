/**
 * 列表子组件
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Text
} from 'react-native';

// 引入observer
import { observer } from 'mobx-react/native';

// 引入Circle组件
import Circle from './Circle';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		height: 100,
	},
	img: {
		width: 90,
		height: 90,
	},
	content: {
		//
	},
	price: {
		//
	},
	name: {
		fontSize: 16,
	},
	priceAndControls: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		padding: 10,
		justifyContent: 'center',
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#000',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	},
	buttonText: {
		//
	}
});

// 监听observer
@observer
export default class Item extends Component {
	check = (checked) => {
		const { index, cartData } = this.props;
		cartData.check(checked, index);
	};
	minus = () => {
		const { index, data: { count }, cartData } = this.props;
		// 安全检查
		if(count > 1){
			cartData.minus(index);
		}
	};
	plus = () => {
		const { index, data: { count }, cartData } = this.props;
		cartData.plus(index);
	};
	render() {
		// 取出父组件传递的值 props上的数据只可读不可写(不可更改)
		const { index, data: {id,name,count,img,checked} } = this.props;

		return (
			<View style={styles.root}>
				{/*勾选框*/}
				<Circle onPress={this.check} />
				{/*图片*/}
				<Image style={styles.img} source={{uri: img}} />
				{/*描述*/}
				<View style={styles.content}>
					<Text style={styles.name}>{name}</Text>
					<View style={styles.priceAndControls}>
						<Text style={styles.price}>￥{price.toFixed(2)}</Text>
						<TouchableOpacity
							style={styles.button}
							onPress={this.minus}
						>
							<Text style={styles.buttonText}>-</Text>
						</TouchableOpacity>
						<Text>{count}</Text>
						<TouchableOpacity
							style={styles.button}
							onPress={this.plus}
						>
							<Text style={styles.buttonText}>+</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
