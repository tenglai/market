/**
 */
'use strict';

import { combineReducers } from 'redux';
import { onLineNews } from './OnLineNewsReducer';
import { weiXinNews } from './WeiXinNewsReducer';
import {
      homeTopBanner, 
      homeNewsCategory, 
      homeWanNianLi,
      homeRecentMovies,
} from './HomePageReducer';
import { robotChart } from './FeedChartReducer';

const rootReducer = combineReducers({
      onLineNews,
      homeTopBanner,
      homeNewsCategory,
      homeWanNianLi,
      homeRecentMovies,
      robotChart,
      weiXinNews,
});

export default rootReducer;