/**
 * 注册 / 忘记密码？ (登录页下半部分)
 */
import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

export default class SignupSection extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>注册</Text>
				<Text style={styles.text}>忘记密码?</Text>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 65,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});