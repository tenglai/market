/**
 * Created by yeshaojian on 2017/3/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
} from 'react-native';

// 获取屏幕尺寸
const {width, height} = Dimensions.get('window');

// 引入外部文件
import Main from './GDMain';

export default class GDLaunchPage extends Component {

    // 组件加载完成
    componentDidMount() {
        // 倒计时操作
        setTimeout(() => {
            this.props.navigator.replace({
                component: Main
            })
        }, 1500)
    }

    render() {
        return (
            // 启动页，图片资源保存在 android-->app-->src-->main-->res-->drawable-xxhdpi 中
            // <Image source={{uri: 'launchimage'}} style={styles.imageStyle}/>

            // 也可以使用view,自定义布局文件，也可以组件化的方式引入
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { // 样式
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00FF00',
    },
    imageStyle: {
        width: width,
        height: height,
    }
});