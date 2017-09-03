/**
 * 筛选菜单
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Dimensions,
    Platform,
} from 'react-native';

// 获取屏幕宽高
const {width, height} = Dimensions.get('window');

export default class GDCommunalSiftMenu extends Component {
	
	static defaultProps = {
        removeModal:{},
        loadSiftData:{}
    };

    static propTypes = {
        data:PropTypes.array,
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
        };
    }

    // 退出
    popToHome(data) {
        this.props.removeModal(data);
    }

    // 点击事件
    siftData(mall, cate) {
        this.props.loadSiftData(mall, cate);
        this.popToHome(false);
    }

    // 处理数据
    loadData() {
        let data = [];

        for (let i = 0; i<this.props.data.length; i++) {
            data.push(this.props.data[i]);
        }

        // 重新渲染
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
        })
    }

    renderRow(rowData) {
        return(
            <View style={styles.itemViewStyle}>
                <TouchableOpacity
                    onPress={() => this.siftData(rowData.mall, rowData.cate)}
                >
                    <View style={styles.itemViewStyle}>
                        <Image source={{uri:rowData.image}} style={styles.itemImageStyle} />
                        <Text>{rowData.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return(
            <TouchableOpacity
                onPress={() => this.popToHome(false)}
                activeOpacity={1} // 不透明
            >
                <View style={styles.container}>
                    {/* 菜单内容 */}
                    <ListView
                        scrollEnabled={false}                           // 设置禁止滚动
                        dataSource={this.state.dataSource}              // 设置数据源
                        renderRow={this.renderRow.bind(this)}           // 根据数据初始化 Cell
                        contentContainerStyle={styles.contentViewStyle} // 内容样式
                        initialListSize={16}                            // 一次性渲染几行数据
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:width,
        height:height
    },

    contentViewStyle: {
        flexDirection:'row',
        flexWrap:'wrap',
        width: width,
        top:Platform.OS === 'ios' ? 64 : 44,
    },

    itemViewStyle: {
        width:width * 0.25,
        height:70,
        backgroundColor:'rgba(249,249,249,1.0)',
        justifyContent:'center',
        alignItems:'center'
    },

    itemImageStyle: {
        width:40,
        height:40
    }
});