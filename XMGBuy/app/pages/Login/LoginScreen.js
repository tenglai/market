/**
 * 登录页面
 */
import React, { Component, PropTypes } from 'react';
// logo
import Logo from '../../components/Logo';
// 表单组件
import Form from '../../components/Form';
// 背景
import Wallpaper from '../../components/Wallpaper';
// 提交按钮
import ButtonSubmit from '../../components/ButtonSubmit';
// 注册 / 忘记密码？
import SignupSection from '../../components/SignupSection';

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</Wallpaper>
		);
	}
}