import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {HttpService} from "../services/httpservice/http.service";
import {AlertService} from "../services/alertservice/alert.service";
import {LoadingService} from "../services/loadingservice/loading.service";
import {ToastService} from "../services/toastservice/toast.service";
import { TestProvider } from '../providers/test/test';


@NgModule({
  declarations: [
    MyApp,
    // HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    AlertService,
    LoadingService,
    ToastService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestProvider,
    TestProvider,
    TestProvider,

  ]
})
export class AppModule {}
