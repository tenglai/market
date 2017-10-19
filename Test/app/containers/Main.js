/*主页面*/
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

// 引入 测试组件
import TestText from '../components/TestText'
/**
 * 获取 react-redux的 connect() 方法
 * 注：使组件层级中的 connect() 方法能够得到 redux store
 */
import { connect } from 'react-redux';
// 获取 action行为的值
// import { CHANGE_TEXT } from '../redux/action/action';
import { changeText } from '../redux/action/action';
 
class Main extends Component {
    render() {
        // 通过 props 拿到保存的 onChangeText
        const { onChangeText } = this.props;
        
        return (
            <View style={styles.container}>
                {/* 需要改变的组件 */}
                {/* 将父组件(Main)的props,传递给子组件(TestText)*/}
                <TestText {...this.props} />
                
                {/* 按钮 */}
                <TouchableOpacity
                    // 设置按钮点击事件
                    onPress={onChangeText}
                >
                    <Text>改变文字按钮</Text>
                </TouchableOpacity>
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

/************ 初始化 ************/
// 获取 state 变化
const mapStateToProps = (state) => {
    return {
        // 获取 state 变化
        value: state.text,
    }
};
 
// 发送行为
const mapDispatchToProps = (dispatch) => {
    return {
        // 发送行为
        // onChangeText: () => dispatch({type: CHANGE_TEXT}),
        onChangeText: () => dispatch(changeText('外部传值')),
    }
};
 
/**
 * 通过 connect() 方法 对Main组件进行第二层包装
 * 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
 * mapStateToProps 获取状态的函数
 * mapDispatchToProps 发送行为的函数
 */
export default connect(mapStateToProps, mapDispatchToProps)(Main);