/**
 * 通过observer 将数据变成可变的数据(可读写)
 */
import { observable, computed } from 'mobx';

/**
 * 独立于组件的变量,用于存储组件状态
 */
const cartData = observable([
	{
		id: '928128',
		name: '飞利浦（PHILIPS）电吹风机 HP8230 家用大功率恒温护发冷热风',
		price: 620000,
		count: 1,
		img: 'http://img10.360buyimg.com/n7/g14/M06/04/15/rBEhV1HcwMEIAAAAAACwKUjHr8IAAA6egEjTU4AALBB222.jpg!q70.jpg.webp',
		checked: false,
	},
	{
		id: '3926802',
		name: '和情（LOTUS）缤咖时焦糖饼干250g*2袋装',
		price: 6180000,
		count: 1,
		img: 'http://img10.360buyimg.com/n7/s176x176_jfs/t3715/282/1024231787/79825/c65fba1d/581aeeb3N5802976f.jpg!q70.jpg.webp',
		checked: false
	},
]);

// 封装对数据操作的方法
cartData.minus = (index) => {
	cartData[index].count -= 1;
};

cartData.plus = (index) => {
	cartData[index].count += 1;
};

cartData.check = (checked, index) => {
	cartData[index].checked = checked;
};

// 在现有的数据上计算结束后得到的结果
cartData.count = computed(() => {
	// reduce 类似击鼓传花 层层叠加
	return cartData.reduce((a,b) => {
		if(b.checked){
			return a + b.count;
		}else{
			return a;
		}
		// return a + b.checked && b.count;
	},0);
});

cartData.sum = computed(() => {
	// reduce 类似击鼓传花 层层叠加
	return cartData.reduce((a,b) => {
		if(b.checked){
			return a + b.count * b.price;
		}else{
			return a;
		}
		// return a + b.checked && (b.price * b.count);
	},0);
});

export default cartData;