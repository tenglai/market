/**
 * 小时风云榜
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';

export default class GDHourList extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>小时风云榜</Text>
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
