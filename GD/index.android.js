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

// 引用外部文件,通过Main组件,连接其他组件
import Main from './app/main/GDMain';

export default class GD extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('GD', () => GD);
