/**
 * 步骤三
 * 初始化 store
 */
// 引入 reducer(操作)
import Reducer from '../reducer/reducer';
// 获取redux中的初始化方法 createStore
import { createStore } from 'redux';

// 输出
export default () => {
 
    // 根据 reducer 初始化 store
    const store = createStore(Reducer);
 
    return store;
}