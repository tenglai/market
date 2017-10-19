/**
 * 步骤一
 * 行为 action
 */

// 定义行为名称
export const CHANGE_TEXT = 'CHANGE_TEXT';

// 初始化 CHANGE_TEXT 对象
export const changeText = (text) => { // 接收test参数
    return {
        type: CHANGE_TEXT, // 名称
        text // 参数 默认值
    }
};