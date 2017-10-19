/*测试组件*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
 
export default class TestText extends Component {
    render() {
        // 获取 props 中的 value
        const { value } = this.props;
 
        return (
            // 根据 value 改变内部文字
            <Text>{value}</Text>
        );
    }
}