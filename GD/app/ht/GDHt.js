/**
 * 海淘折扣
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';

export default class GDHt extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>海淘折扣</Text>
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