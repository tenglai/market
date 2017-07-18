/**
 */
'use strict';

import React, { Component } from 'react';
import {
  BackAndroid,
} from 'react-native';
import SplashScene from './SplashScene';
import NavigatorRoute from './../common/NavigatorRoute';
// 替代 Navigator 组件
import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components'; // 引入

var _navigator = null;
export default class NavigatorRoot extends Component {
    render() {
        return (
            <Navigator
                ref='navigator'
                style={{flex: 1}}
                configureScene={this.configureScene}
                renderScene={this._renderScene}
                initialRoute={{
                    component: SplashScene,
                }}/>
        );
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        _navigator = navigator;
        return (
        <Component navigator={navigator} route={route} />
        );
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            return NavigatorRoute.navigatorPopBack(_navigator);
        });
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }
}