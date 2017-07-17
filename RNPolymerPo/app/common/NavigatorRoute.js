/**
 */
'use strict';

import React, { Component } from 'react';
import {
  BackAndroid,
  Alert,
} from 'react-native';
import WebViewScene from './../containers/WebViewScene';
import MainScene from './../containers/MainScene';
import FeedChartScene from './../containers/FeedChartScene';
import NewsCategoryListScene from './../containers/NewsCategoryListScene';

export default class NavigatorRoute extends Component {

    static navigatorPopBack(navigator) {
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            console.log('----------navigatorPopBack-1');
            navigator.pop();
            return true;
        }
        
        Alert.alert(
            '退出应用',
            '亲，您真的不再需要奴婢做牛做马了吗？',
            [
            { text: '需要', onPress: () => {} },
            { text: '不需要', onPress: () => {BackAndroid.exitApp()}},
            ]
        );
        return true;
    }

    static replaceToMainScene(navigator) {
        navigator.replace({
            component: MainScene,
        });
    }

    static pushToFeedChartScene(navigator) {
        navigator.push({
            component: FeedChartScene,
        });
    }

    static pushToNewsCategoryListScene(navigator, categories, curKey) {
        navigator.push({
            component: NewsCategoryListScene,
            curKey: curKey,
            categories: categories,
        });
    }

    static pushToWebViewScene(navigator, pushFrom, paramers) {
        navigator.push({
            component: WebViewScene,
            pushFrom: pushFrom,
            paramers: paramers,
        });
    }
}