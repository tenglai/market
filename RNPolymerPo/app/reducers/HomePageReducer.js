/**
 */
'use strict';
import * as types from './../actions/ActionTypes';

const initBannerState = {
    bannerList: [],
}

export function homeTopBanner(state = initBannerState, action) {
    switch (action.type) {
        case types.ACTION_HOME_BANNER_FETCHED:
            return Object.assign({}, state, {
                    bannerList: action.bannerList
                });
        default:
            return state;
    }
}

const initCategoryState = {
    newsCategoryList: [],
}

export function homeNewsCategory(state = initCategoryState, action) {
    switch (action.type) {
        case types.ACTION_HOME_NEWS_CATEGORY_FETCHED:
            return Object.assign({}, state, {
                    newsCategoryList: action.newsCategoryList
                });
        default:
            return state;
    }
}

const initWnlState = {
    wnlData: undefined,
}

export function homeWanNianLi(state = initWnlState, action) {
    switch (action.type) {
        case types.ACTION_WNL_FETCHED:
            return Object.assign({}, state, {
                    wnlData: action.wnlData
                });
        default:
            return state;
    }
}

const initMoviesState = {
    moviesResult: undefined,
}

export function homeRecentMovies(state = initMoviesState, action) {
    switch (action.type) {
        case types.ACTION_RECENT_MOVIES_FETCHED:
            return Object.assign({}, state, {
                    moviesResult: action.moviesResult
                });
        default:
            return state;
    }
}