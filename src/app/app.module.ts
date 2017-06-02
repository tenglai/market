import { NgModule, ErrorHandler } from '@angular/core'; // 核心模块
import { BrowserModule } from '@angular/platform-browser'; // 包含浏览器上启动应用的关键模块
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 应用模块
@NgModule({
  // 包装组件或指令等
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  // 导入其他模块
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  // 设置根组件
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  // 依赖注入
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
// 导出组件或指令等
export class AppModule {}
