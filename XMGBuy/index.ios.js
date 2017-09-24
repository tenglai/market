/**
 * IOS
 */
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

// 导入外部组件
import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components';

// 引入启动页面
import LaunchImage from './app/component/LaunchImage';

export default class XMGBuy extends Component {
  render() {
    return (
      <Navigator
            initialRoute={{name: '启动页', component:LaunchImage}}
            renderScene={(route, navigator) =>{
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
            }}
        />
    );
  }
}

AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
