/**
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
/**
 * 正在火热上映电影Item View
 */
export default class ItemOnLineMovieView extends Component {
  static propTypes = {
      bean: React.PropTypes.object.isRequired,
      itemClicked: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={this.props.itemClicked}>
        <View style={styles.itemContainer}>
          <Image style={styles.itemIcon} 
            source={{uri: (this.props.bean.iconaddress=='' ? 'defaults' : this.props.bean.iconaddress)}}/>
          <View style={styles.itemDescription}>
            <Text style={styles.itemTitle} 
              numberOfLines={1}>
              {this.props.bean.tvTitle}
            </Text>
            <Text style={styles.itemDate} 
              numberOfLines={1}>
              {this.props.bean.playDate.showname}：{this.props.bean.playDate.data}
            </Text>
            <Text style={styles.itemDetails} 
              numberOfLines={3}>
              {this.props.bean.story.showname}：{this.props.bean.story.data.storyBrief}
            </Text>
            <Text style={styles.fromText} 
              numberOfLines={1}>
              {this.props.bean.subHead}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 4,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
  },

  itemIcon: {
    width: 100,
    height: 130,
    backgroundColor: '#e9e9e9',
  },

  itemDescription: {
    flex: 1,
    marginLeft: 8,
    marginTop: 12,
    marginRight: 8,
    marginBottom: 8,
  },

  itemTitle: {
    flex: 1,
    color: '#535252',
    fontSize: 14,
  },

  itemDate: {
    flex: 1,
    color: '#535252',
    fontSize: 12,
  },

  itemDetails: {
    flex: 3,
    color: '#535252',
    fontSize: 12,
  },

  fromText: {
    flex: 1,
    fontSize: 9,
    color: '#ff9800',
    alignSelf: 'flex-end',
  },
});
