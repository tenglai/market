/**
 * 设置页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

// 引入自定义导航栏组件
import CommunalNavBar from '../main/GDCommunalNavBar';

export default class GDSettings extends Component {

    // 返回上一页
    pop() {
        this.props.navigator.pop();
    }

    // 返回左边按钮
    renderLeftItem() {
        // 将组件返回出去
        return(
            <TouchableOpacity
                onPress={() => {this.pop()}}
            >
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source={{uri:'back'}} style={styles.navbarLeftItemStyle} />
                    <Text>返回</Text>
                </View>
            </TouchableOpacity>
        );
    }

    // 返回中间按钮
    renderTitleItem() {
        return(
            <Text style={styles.navbarTitleItemStyle}>设置</Text>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                {/* 导航栏样式 */}
                <CommunalNavBar
                    leftItem = {() => this.renderLeftItem()}
                    titleItem = {() => this.renderTitleItem()}
                />

                {/* 内容 */}
                <ScrollView
                    style={styles.scollViewStyle}
                >
                    {/* 第一个cell */}
                    <SettingsCell
                        leftTitle="淘宝天猫快捷下单"
                        isShowSwitch={true}
                    />

                    {/* 第二个cell */}
                    <SettingsCell
                        leftTitle="清理图片缓存"
                        isShowSwitch={false}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    navbarLeftItemStyle: {
        width:20,
        height:20,
        marginLeft:15,
    },

    navbarTitleItemStyle: {
        fontSize:17,
        color:'black',
        marginRight:50
    },

    scollViewStyle: {
        backgroundColor:'white',
    },
});