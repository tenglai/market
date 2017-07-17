/**
 */
'use strict';

import * as types from './ActionTypes';
import { 
    URL_WEI_XIN_JINGXUAN,
    APP_KEY_WEI_XIN_JINGXUAN,
} from  '../common/Constants';
import NetUtils from './../utils/NetUtils';

export function fetchWeiXinNewsListByPage(start, pageLimit) {
    return dispatch => {
        dispatch({
            type: types.ACTION_WEIXIN_NEWS_PRE_FETCH,
            isLoadingMore: true,
        });
        NetUtils.get(URL_WEI_XIN_JINGXUAN+'?key='+APP_KEY_WEI_XIN_JINGXUAN+'&num='+pageLimit+'&page='+start)
        .then(function (result) {
            if (result.code == 200) {
                dispatch({
                    type: types.ACTION_WEIXIN_NEWS_FETCH_OK,
                    newsList: result.newslist,
                    start: start,
                    pageLimit: pageLimit,
                    isLoadingMore: false,
                });
            } else {
                dispatch({
                type: types.ACTION_WEIXIN_NEWS_FETCH_ERROR,
                isLoadingMore: false,
            });
            }
        }, function () {
            dispatch({
                type: types.ACTION_WEIXIN_NEWS_FETCH_ERROR,
                isLoadingMore: false,
            });
        })
    };
}