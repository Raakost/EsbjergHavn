import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {TabContentPage} from "../pages/tab-content/tab-content";
import {TabHomePage} from "../pages/tab-home/tab-home";
import {TabsPage} from "../pages/tabs/tabs";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LaunchNavigator} from "@ionic-native/launch-navigator";

import { UmbracoServiceProvider } from '../providers/umbraco-service/umbraco-service';
import { MockServiceProvider } from '../providers/mock-service/mock-service';
import { HttpClientModule } from '@angular/common/http';
import {SettingsPage} from "../pages/settings/settings";




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabContentPage,
    TabHomePage,
    TabsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabHomePage,
    TabContentPage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UmbracoServiceProvider,
    MockServiceProvider,
    LaunchNavigator
  ]
})
export class AppModule {}
