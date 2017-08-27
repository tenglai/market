/**
 * 滚动图
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

// 引入Dimensions类库
var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;

// 引入计时器类库
var TimerMixin = require('react-timer-mixin');

var ScrollImage = React.createClass({
    // 注册计时器
    mixins: [TimerMixin],

    // 设置固定值
    getDefaultProps(){
        return{
            // 每隔多少时间
            duration:2000,
            // 所有的image对象数据
            imageDataArr:[]
        }
    },

    // 设置可变和初始化值
    getInitialState(){
        return{
            // 当前页面
            currentPage:0,
            // 当前标题
            title:this.props.imageDataArr[0].title,
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    // 当一帧滚动结束
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                    // 开始拖拽scrollView
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    // 停止拖拽
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.indicatorViewStyle}>
                    <Text style={{color:'white',marginLeft:10}}>{this.state.title}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginRight:10}}>
                        {this.renderPageCircle()}
                    </View>
                </View>
            </View>
        );
    },

    // 开始拖拽的时候调用
    onScrollBeginDrag(){
        // 停止定时器
        this.clearInterval(this.timer);
    },

    // 停止拖拽的时候调用
    onScrollEndDrag(){
        // 开启定时器
        this.startTimer();
    },

    // 组件已经加载完毕之后,实现一些复杂的操作
    componentDidMount(){
        // 开启定时器
        this.startTimer();
    },

    // 开启定时器
    startTimer(){
        // 1.拿到scrollView
        var scrollView = this.refs.scrollView;
        var imgCount = this.props.imageDataArr.length;

        // 2.添加定时器 this.timer 可以理解成一个隐士的全局变量
        this.timer = this.setInterval(function () {
            // 2.1设置圆点
            var activePage = 0;
            // 2.2判断
            if((this.state.currentPage+1) >= imgCount){ //越界
                activePage = 0;
            }else{
                activePage = this.state.currentPage+1;
            }
            // 3.更新状态机,重新绘制UI
            this.setState({
                currentPage:activePage
            });

            //4.让scrollView滚动起来
            var offsetX = activePage * ScreenW;
            scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
        },this.props.duration);
    },

    // 返回图片
    renderAllImage(){
        // 数组
        var allImage = [];
        // 拿到图片数据
        var imageArr = this.props.imageDataArr;
        // 遍历
        for(var i=0;i<imageArr.length;i++){
            // 取出单个图片对象
            var imgItem = imageArr[i];
            // 创建组件装入数组
            allImage.push(
                <Image key={i} source={{uri:imgItem.imgsrc}} style={{width: ScreenW,height:150}} />
            );
        }

        // 返回
        return allImage;
    },

    // 返回分页指示器圆点
    renderPageCircle(){
        // 定义一个数组放置所有的圆点
        var indicatorArr = [];
        var imgArr = this.props.imageDataArr;

        // 特殊样式
        var style;

        for(var i=0;i<imgArr.length;i++){
            // 判断style
            style = (i==this.state.currentPage) ? {color:'orange'} : {color:'#fff'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:30},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    },

    // 当一帧滚动结束的时候调用
    onAnimationEnd(event){
        // 1.计算水平方向偏移量
        var offsetX = event.nativeEvent.contentOffset.x
        // 2.计算当前页码
        var page = Math.floor(offsetX / ScreenW);
        // 3.更新状态机,重新绘制UI
        this.setState({
            currentPage:page,
            title:this.props.imageDataArr[page].title,
        });
    },

});

const styles = StyleSheet.create({
    container:{
        // marginTop:20,
    },
    // 分页指示器样式
    indicatorViewStyle:{
        width:ScreenW,
        height:25,
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        bottom:0,
        // 设置主轴方向,让圆点水平排列
        flexDirection:'row',
        // 侧轴方向
        alignItems:'center',
        // 主轴对齐方式
        justifyContent:'space-between',
    }
});

// 最后要输出这个类库
module.exports = ScrollImage;
