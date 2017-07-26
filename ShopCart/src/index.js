import { AppRegistry } from 'react-native';
import App from './App';

// __DEV__ 为true 表示在开发环境(develpment)中
// __DEV__ 为false 表示在发布环境中
// 因为console语句会拖累javascript线程,在发布环境中,将控制台的打印语句console全部置为空函数
if(!__DEV__) {
	global.console = {
		info: () => {},
		log: () => {},
		warn: () => {},
		error: () => {},
	};
}

// 注册
AppRegistry.registerComponent('App', () => App);