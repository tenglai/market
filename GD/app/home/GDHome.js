/**
 * 首页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';

export default class GDHome extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
