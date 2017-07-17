/**
 */
'use strict';

import * as types from './ActionTypes';
import { 
    FAKE_BANNER_NET_DATA,
    FAKE_NEWS_CATEGORY_NET_DATA,
    APP_KEY_WAN_NIAN_LI,
    URL_WAN_NIAN_LI,
    APP_RECENT_MOVIES,
    URL_RECENT_MOVIES,
} from  '../common/Constants';
import NetUtils from './../utils/NetUtils';
import CommonUtils from './../utils/CommonUtils';

export function fetchHomeTopBannerList() {
    return dispatch => {
        dispatch({
            type: types.ACTION_HOME_BANNER_FETCHED,
            bannerList: FAKE_BANNER_NET_DATA
        });
    };
}

export function fetchHomeNewsCategoryList() {
    return dispatch => {
        dispatch({
            type: types.ACTION_HOME_NEWS_CATEGORY_FETCHED,
            newsCategoryList: FAKE_NEWS_CATEGORY_NET_DATA
        });
    };
}

export function fetchWanNianLiInfo() {
    return dispatch => {
        NetUtils.get(URL_WAN_NIAN_LI+'?key='+APP_KEY_WAN_NIAN_LI+'&date='+CommonUtils.dateFormat(new Date(), 'yyyy-M-d'))
        .then(function (result) {
            if (result.error_code == 0) {
                dispatch({
                    type: types.ACTION_WNL_FETCHED,
                    wnlData: result.result.data,
                });
            }
            
        }, function () {})
    };
}

export function fetchRecentMoviesList(city) {
    return dispatch => {
        NetUtils.get(URL_RECENT_MOVIES+'?dtype=json&key='+APP_RECENT_MOVIES+'&city='+city)
        .then(function (result) {
            if (result.error_code == 0) {
                if (result.result.data.length > 0) {
                    //只用正在上映的电影数据
                    dispatch({
                        type: types.ACTION_RECENT_MOVIES_FETCHED,
                        moviesResult: result.result.data[0].data,
                    });
                }
            }
            
        }, function () {})
    };
}