import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import {MockServiceProvider} from "../providers/mock-service/mock-service";
import {UmbracoServiceProvider} from "../providers/umbraco-service/umbraco-service";
import {HomePageModel} from "../models/HomePageModel";
import {TabsContentModel} from "../models/TabsContentModel";
import {TabHomePage} from "../pages/tab-home/tab-home";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  locations: Array<TabsContentModel> = [];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public mockService: MockServiceProvider, public service: UmbracoServiceProvider) {
    this.initializeApp();

    //this.pages = mockService.getMenuItems();
    this.startApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  get

  startApp() {
    this.service.getContentDa().subscribe(result => {
      this.locations = result;
      let locationPages = [];
      for (let i = 0; i < this.locations.length; i++) {
        let cur = this.locations[i];
        locationPages.push({title: cur.Title, component: TabHomePage, data: cur});
        console.log(cur.Id);
      }
      this.pages = locationPages;
    });
  }

  openPage(page) {
    //this.nav.setRoot(page.component);
    this.nav.push(page.component, {data: page});
    console.log(page);
  }
}
