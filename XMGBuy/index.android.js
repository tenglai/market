/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

/**-------导入外部的组件类---------**/
var LaunchImage = require('./Component/Main/XMGLaunchImage');

class XMGBuy extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name:'启动页',component:LaunchImage}}
                configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
            />
        );
    }
}

AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
