/**
 * Android
 */
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

// 导航器
import CustomerComponents, {
    Navigator
} from 'react-native-deprecated-custom-components';
// 引入 启动页面
import LaunchPage from './app/main/GDLaunchPage';

export default class GD extends Component {
  render() {
    return (
    	<Navigator
            initialRoute={
            	{
            		name: 'launchPage',
            		component:LaunchPage
            	}
           	}

            renderScene={(route, navigator) =>{
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
            }}
        />
    );
  }
}

AppRegistry.registerComponent('GD', () => GD);
