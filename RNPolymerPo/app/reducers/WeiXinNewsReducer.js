/**
 */
'use strict';
import * as types from './../actions/ActionTypes';

const initialState = {
    haveMore: true,
    isLoadingMore: false,
    newsList: [],
}
//分页加载state填充数据的JS技巧
export function weiXinNews(state = [], action) {
    switch (action.type) {
        case types.ACTION_WEIXIN_NEWS_PRE_FETCH:
            return Object.assign({}, state, {
                    isLoadingMore: action.isLoadingMore
                });
        case types.ACTION_WEIXIN_NEWS_FETCH_OK:
            //每次判断取回来的是不是够limit，不够说明没有下一页了
            let haveMore = (action.newsList.length === action.pageLimit);
            if (action.start === 1) {
                return Object.assign({}, state, {
                    newsList: action.newsList,
                    haveMore: haveMore,
                    isLoadingMore: action.isLoadingMore,
                });
            } else {
                return Object.assign({}, state, {
                    newsList: state.newsList.concat(action.newsList),
                    haveMore: haveMore,
                    isLoadingMore: action.isLoadingMore,
                });
            }
        case types.ACTION_WEIXIN_NEWS_FETCH_ERROR:
            return Object.assign({}, state, {
                    isLoadingMore: action.isLoadingMore
                });
        default:
            return state;
    }
}
