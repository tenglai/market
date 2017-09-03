/**
 * 近半小时热门 cell
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    Image,
} from 'react-native';

// 获取屏幕宽高
const {width, height} = Dimensions.get('window');

export default class GDCommunalHotCell extends Component {

	// 定义成员属性
	static propTypes = {
		image: PropTypes.string,  // 外部传字符串
		title: PropTypes.string,
	}

    render() {
        return (
            <View style={styles.container}>
            	{/* 左边的图片 设置占位图 */}
                <Image source={{uri:this.props.image === '' ? 'defaullt_thumb_250x250' : this.props.image}} style={styles.imageStyle} />
            	{/* 中间的文字 */}
            	<View>
            		<Text numberOfLines={3} style={styles.titleStyle}>{this.props.title}</Text>
            	</View>
            	{/* 右边的箭头 */}
            	<Image source={{uri:'icon_cell_rightArrow'}} style={styles.arrowStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    	flexDirection:'row',
    	alignItems:'center',
    	justifyContent:'space-between',
    	backgroundColor:'white',
        height:100,
        width:width,
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        marginLeft:15,
        overflow:'hidden',
    },
    imageStyle: {
    	width:70,
    	height:70,
    },
    titleStyle: {
        width:width*0.65,
    },
    arrowStyle: {
    	width:10,
    	height:10,
        marginRight:30
    }
});