/**
 */
'use strict';

import * as types from './ActionTypes';
import { 
    APP_KEY_TULING_ROBOT,
    URL_TULING_ROBOT,
} from  '../common/Constants';
import NetUtils from './../utils/NetUtils';

export function resetRobotResponseState() {
    return dispatch => {
        dispatch({
            type: types.ACTION_CHART_ROBOT_PRE_FETCH,
            isUser: false,
            data: undefined,
        });
    };
}

export function fetchRobotResponse(inputInfo) {
    return dispatch => {
        dispatch({
            type: types.ACTION_CHART_ROBOT_PRE_FETCH,
            isUser: true,
            data: inputInfo,
        });
        NetUtils.get(URL_TULING_ROBOT+'?dtype=json&key='+APP_KEY_TULING_ROBOT+'&userid=1990&info='+encodeURI(inputInfo))
        .then(function (result) {
            if (result.error_code == 0) {
                dispatch({
                    type: types.ACTION_CHART_ROBOT_FETCH_OK,
                    isUser: false,
                    data: result.result.text,
                });
            } else {
                dispatch({
                    type: types.ACTION_CHART_ROBOT_FETCH_ERROR,
                    isUser: false,
                    data: (result.reason + '('+result.error_code+')'),
                });
            }
        }, function () {
            dispatch({
                type: types.ACTION_CHART_ROBOT_FETCH_ERROR,
                isUser: false,
                data: '工匠若水说：貌似网络请求发出后被外星人拦截了(请检查您高贵的手机网络问题)！',
            });
        })
    };
}