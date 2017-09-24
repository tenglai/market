/**
 * Cell
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    Image,
} from 'react-native';

import PropTypes from 'prop-types';
 
// 获取屏幕宽高
const {width, height} = Dimensions.get('window');
 
export default class CommunalCell extends Component {
 
    // 定义成员属性
    static propTypes = {
        staffCode:PropTypes.number,
        name:PropTypes.string,
        gender:PropTypes.string,
        labelDeviceCode:PropTypes.string,
        phone:PropTypes.string,
        departmentName:PropTypes.string,
        workTypeName:PropTypes.string,
    };
 
    render() {
        return (
            <View style={styles.container}>
                {/* 工号 */}
                <View style={styles.cellStyle}>
                    <Text style={styles.fontStyle}>工号：{this.props.staffCode}</Text>
                </View>
                {/* 姓名 */}
                <View style={styles.cellStyle}>
                    <Text style={styles.fontStyle}>姓名：{this.props.name}</Text>
                </View>
                {/* 性别 */}
                <View style={styles.cellStyle}>
                    <Text style={styles.fontStyle}>性别：{this.props.gender == 1 ? '男': '女'}</Text>
                </View>
                {/* 腕带设备号 */}
                <View style={styles.cellStyle}>
                    <Text style={styles.fontStyle}>腕带设备号：{this.props.labelDeviceCode}</Text>
                </View>
                {/* 手机号 */}
                <View style={styles.cellStyle}>
                    <Text style={styles.fontStyle}>手机号：{this.props.phone}</Text>
                </View>
                {/* 部门 */}
                <View style={styles.cellStyle}>
                    <Text style={styles.fontStyle}>部门：{this.props.departmentName}</Text>
                </View>
                {/* 工种 */}
                <View style={styles.cellStyle}>
                    <Text style={styles.fontStyle}>工种：{this.props.workTypeName}</Text>
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        width: 300,
        marginTop:0,
        marginBottom:0,
        marginLeft:'auto',
        marginRight:'auto',
    },
    cellStyle:{
        marginTop: 5,
        marginBottom: 5,
    },
    fontStyle:{
        fontSize:16
    }
});