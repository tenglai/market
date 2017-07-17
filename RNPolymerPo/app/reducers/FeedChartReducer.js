/**
 */
'use strict';
import * as types from './../actions/ActionTypes';

const initialState = {
    isUser: false,
    data: undefined,
}

export function robotChart(state = initialState, action) {
    switch (action.type) {
        case types.ACTION_CHART_ROBOT_PRE_FETCH:
            return Object.assign({}, state, {
                isUser: action.isUser,
                data: action.data
            });
        case types.ACTION_CHART_ROBOT_FETCH_OK:
            return Object.assign({}, state, {
                isUser: action.isUser,
                data: action.data
            });
        case types.ACTION_CHART_ROBOT_FETCH_ERROR:
            return Object.assign({}, state, {
                isUser: action.isUser,
                data: action.data
            });
        default:
            return state;
    }
}