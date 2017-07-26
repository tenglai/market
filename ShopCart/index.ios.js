// 定义全局变量
global.__APP__ = true; // 用于区分是web应用还是app应用 便于代码多端调用
global.__ANDROID__ = false;
global.__IOS__ = true; // ios 环境中

// 将所有代码放在src目录下执行,方便android和ios调用
require('./src'); // 如果写的是目录,则默认调用目录下小写的index.js文件