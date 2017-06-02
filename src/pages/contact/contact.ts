import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// 装饰器(赋予一个类更丰富的信息(元数据))
@Component({
  // 元数据
  selector: 'page-contact', // css3 选择器
  templateUrl: 'contact.html' // 模板
})
// 组件类
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

}
