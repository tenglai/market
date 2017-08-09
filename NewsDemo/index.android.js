/**
 * android
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

// 引用外部组件
var Main = require('./Component/Main');

class NewsDemo extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
