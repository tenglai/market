/**
 */
'use strict';

import React, { Component } from 'react';
import {
    Animated,
    PropTypes,
} from 'react-native';
/**
 * 支持设置淡入淡出渐变动画的Image组件
 */
export default class FadeAnimedImage extends Component {
    static propTypes = {
        source: React.PropTypes.string.isRequired,
        inputRange: React.PropTypes.array.isRequired,
        outputRange: React.PropTypes.array.isRequired,
    };

    render() {
        this._animatedValue = new Animated.Value(0);
        let interpolatedColorAnimation = this._animatedValue.interpolate({
            inputRange: this.props.inputRange,
            outputRange: this.props.outputRange
        });

        return (
            <Animated.Image
                onLoadEnd={() => {
                    Animated.timing(this._animatedValue, {
                        toValue: 100,
                        duration: 500
                    }).start();
                }}
                onLoad={this.props.onLoad ? this.props.onLoad : ()=>{}}
                source={{uri: this.props.source}}
                style={[this.props.style, {opacity: interpolatedColorAnimation}]} />
        );
    }
}