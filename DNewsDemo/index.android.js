/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 引入外部的组件
var Main = require('./Component/XMGMain');

class DNewsDemo extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('DNewsDemo', () => DNewsDemo);
