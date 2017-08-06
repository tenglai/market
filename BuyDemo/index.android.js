/**
 * android
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*==============导入外部组件================*/
var Main = require('./Component/Main/Main');

class BuyDemo extends Component {
    render() {
        return (
            <Main />
        );
    }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('BuyDemo', () => BuyDemo);
