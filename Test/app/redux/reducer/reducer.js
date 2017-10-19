/**
 * 步骤二
 * 操作
 * 通过reducer操作action(根据action行为创建reducer文件)
 */

/**
 * 引入 action
 * CHANGE_TEXT 类型(行为名称)
 * changeText 值
 */
import { CHANGE_TEXT, changeText } from '../action/action';

/**
 * 创建 reducer
 * 根据名称判断是哪一个行为
 * state = changeText('welcome to React Native') 初始化state
 */
const mainReducer = (state = changeText('welcome to React Native'), action) => {
 	/**
 	 * state 不能直接改变
 	 * 定义newState 接收state的值
 	 */
    const newState = state;
    const text = action.text;
 
    // 判断 action 类型
    switch (action.type) {
        case CHANGE_TEXT:
            return {
            	// 返回所有的newState
                ...newState,
                text: '改变了' + text
            };
 
        default:
            return {
                ...newState,
                text:state.text
            }
    }
};

// 输出口
export default mainReducer;