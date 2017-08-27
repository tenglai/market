/**
 * IOS
 */
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

// 引入外部文件(主页面)
import Main from './app/main/GDMain';

export default class GD extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('GD', () => GD);
