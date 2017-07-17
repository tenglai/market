/**
 */
'use strict';
import * as types from './../actions/ActionTypes';

const initialState = {
    state: 'pre_fetch',
    newsList: [],
}
//复用state的技术点
export function onLineNews(state = [], action) {
    switch (action.type) {
        case types.ACTION_ONLINE_NEWS_PRE_FETCH:
            return Object.assign({}, state, {[action.categoryKey]: Object.assign({}, state[action.categoryKey], {
                    state: action.state
                    })
                });
        case types.ACTION_ONLINE_NEWS_FETCH_OK:
            return Object.assign({}, state, {[action.categoryKey]: Object.assign({}, state[action.categoryKey], {
                    newsList: action.newsList,
                    state: action.state,
                    })
                });
        case types.ACTION_ONLINE_NEWS_FETCH_ERROR:
            return Object.assign({}, state, {[action.categoryKey]: Object.assign({}, state[action.categoryKey], {
                    state: action.state
                    })
                });
        default:
            return state;
    }
}