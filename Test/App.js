import React, { Component } from 'react';
// 引入 主页面
import Main from './app/containers/Index'
// 注：使组件层级中的 connect() 方法能够得到 redux store

export default class App extends Component<{}> {
  render() {
    return (
      <Main />
    );
  }
}