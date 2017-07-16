/*
	11.电影列表item

	实现功能：展示电影信息,点击item进入电影详情页面

	包含组件：基本组件

	外部传入：

	movie  电影对象
	onPress  通过...this.props绑定,需要设置参数：电影名称、电影详情页面url

	需要使用的字段：
		images.medium  电影图像
		title  电影名称
		casts  电影演员  数据需要再处理
		rating.average  电影评分
		year  电影上映时间
		genres  电影标签
		alt  电影详情url
*/
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

var MovieItem = React.createClass({
	render:function() {
		var movie = this.props.movie;

		// 提取演员姓名
		// 原始数据结构：数组元素是描述演员的对象,对象中包含演员名字
		// 需要遍历数组,把每个演员的名字存在一个新的数组中
		var actors = [];
		for(var i in movie.casts){
			actors.push(movie.casts[i].name);
		}

		return (
			<TouchableOpacity style={styles.item} {...this.props}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} resizeMode="contain" source={{uri:movie.images.medium}}/>
				</View>
				<View style={styles.contentContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.text} numberOfLines={1}>名称：{movie.title}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.text} numberOfLines={1}>演员：{actors}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.text} numberOfLines={1}>评分：{movie.rating.average}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.text} numberOfLines={1}>时间：{movie.year}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.text} numberOfLines={1}>标签{movie.genres}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
});

var styles = StyleSheet.create({
	item:{
		flexDirection:"row",
		height:120,
		padding:10
	},
	imageContainer:{
		justifyContent:"center",
		alignItems:"center"
	},
	image:{
		width:80,
		height:110
	},
	contentContainer:{
		flex:1,
		marginLeft:15
	},
	textContainer:{
		flex:1,
		justifyContent:"center"
	},
	text:{
		color:"black"
	}
});

module.exports = MovieItem;