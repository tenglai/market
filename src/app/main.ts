import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module'; // 引入模块文件

// 动态引导
platformBrowserDynamic().bootstrapModule(AppModule);
