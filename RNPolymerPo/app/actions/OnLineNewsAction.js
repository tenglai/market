/**
 */
'use strict';

import * as types from './ActionTypes';
import { 
    APP_KEY_ONLINE_NEWS,
    URL_ONLINE_NEWS,
} from  '../common/Constants';
import NetUtils from './../utils/NetUtils';

export function resetNewsListState(key) {
    return dispatch => {
        dispatch({
            type: types.ACTION_ONLINE_NEWS_PRE_FETCH,
            state: 'pre_fetch',
            categoryKey: key,
            newsList: [],
        });
    };
}

export function fetchNewsListByPage(key) {
    return dispatch => {
        dispatch({
            type: types.ACTION_ONLINE_NEWS_PRE_FETCH,
            state: 'pre_fetch',
            categoryKey: key
        });
        NetUtils.get(URL_ONLINE_NEWS+'?key='+APP_KEY_ONLINE_NEWS+'&type='+key)
        .then(function (result) {
            if (result.error_code == 0) {
                dispatch({
                    type: types.ACTION_ONLINE_NEWS_FETCH_OK,
                    newsList: result.result.data,
                    state: 'fetch_ok',
                    categoryKey: key
                });
            } else {
                dispatch({
                type: types.ACTION_ONLINE_NEWS_FETCH_ERROR,
                state: 'fetch_error',
                categoryKey: key
            });
            }
        }, function () {
            dispatch({
                type: types.ACTION_ONLINE_NEWS_FETCH_ERROR,
                state: 'fetch_error',
                categoryKey: key
            });
        })
    };
}