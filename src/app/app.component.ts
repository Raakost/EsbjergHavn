import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopoverController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import {UmbracoServiceProvider} from "../providers/umbraco-service/umbraco-service";
import {TabsContentModel} from "../models/TabsContentModel";
import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";
import {TranslateService} from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, data: TabsContentModel}>;
  chosenLang: string;
  locations: Array<TabsContentModel> = [];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public service: UmbracoServiceProvider, public popoverCtrl: PopoverController, private translateService: TranslateService) {
    translateService.setDefaultLang('dk');
    this.initializeApp();
    this.chosenLang = translateService.getDefaultLang();
    this.startApp();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(SettingsPage);
    popover.present({
      ev: myEvent
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  startApp() {
    this.service.getContentDa().subscribe(result => {
      this.locations = result;
      let locationPages = [];
      for (let i = 0; i < this.locations.length; i++) {
        let cur = this.locations[i];
        locationPages.push({title: cur.Title, component: TabsPage, data: cur});
      }
      this.pages = locationPages;
    });
  }

  openPage(page) {
    this.nav.push(page.component, page.data);
  }
}
