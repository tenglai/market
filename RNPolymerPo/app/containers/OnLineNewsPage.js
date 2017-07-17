/**
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ActivityIndicator,
  ListView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ItemOnLineNewsView from './../components/ItemOnLineNewsView';
import { fetchNewsListByPage, resetNewsListState } from '../actions/OnLineNewsAction';
import NavigatorRoute from './../common/NavigatorRoute';
/**
 * 分类新闻列表（上拉分页加载）
 * 核心知识点：state共用分组解决方案
 */
const pageLimit = 10;

class OnLineNewsPage extends Component {
  static propTypes = {
    categoryKey: React.PropTypes.string.isRequired,
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

	componentDidMount() {
	  this.props.dispatch(fetchNewsListByPage(this.props.categoryKey));		
	}

  componentWillUnmount() {
    this.props.dispatch(resetNewsListState(this.props.categoryKey));
  }

  render() {
    const { onLineNews } = this.props;
    if (onLineNews[this.props.categoryKey]) {
      if (onLineNews[this.props.categoryKey].state == 'pre_fetch') {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <ActivityIndicator
              animating ={true}
              size='large'
              color='#03a9f4'/>
          </View>  
        );
      }
      
      let listData = onLineNews[this.props.categoryKey].newsList === undefined ? [] : onLineNews[this.props.categoryKey].newsList;
      return (
        <View style={styles.container}>
          <ListView
            style={styles.listview}
            enableEmptySections={true}
            dataSource={this.dataSource.cloneWithRows(Array.from(listData))}
            renderRow={this._renderListItemView.bind(this)}
            initialListSize={1} />
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
          <ActivityIndicator
            animating ={true}
            size='large'
            color='#03a9f4'/>
        </View>  
      );
    }
  }

  _renderListItemView(item) {
    if (item) {
      return (
        <ItemOnLineNewsView
          key={item.id}
          bean={item}
          itemClicked={this._itemPressed.bind(this, item)}/>
      );
    }
  }

  _itemPressed(wxNewsBean) {
    NavigatorRoute.pushToWebViewScene(this.props.navigator, 'onLineNews', wxNewsBean);
  }

  _onIconClicked() {
      NavigatorRoute.navigatorPopBack(this.props.navigator);
  }
}

function mapStateToProps(state) {
  const { onLineNews } = state;
  return {
    onLineNews,
  }
}
export default connect(mapStateToProps)(OnLineNewsPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingBottom: 5,
  },

  listview: {
    flex: 1,
    padding: 5,
  },

  footerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});