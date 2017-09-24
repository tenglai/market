/**
 * 入口文件
 */
import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from '../Login/LoginScreen';
import HomeScreen from '../Home/HomeScreen';

export default class Main extends Component {
  	render() {
	  	return (
		    <Router>
		      	<Scene key="root">
			        <Scene key="loginScreen"
			          	component={LoginScreen}
			        	animation='fade'
			          	hideNavBar={true}
			          	initial={true}
			        />
			        <Scene key="homeScreen"
			          	component={HomeScreen}
			          	animation='fade'
			          	hideNavBar={true}
			        />
		      	</Scene>
		    </Router>
	  	);
	}
}