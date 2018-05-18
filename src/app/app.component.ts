import {Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopoverController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import {UmbracoServiceProvider} from "../providers/umbraco-service/umbraco-service";
import {TabsContentModel} from "../models/TabsContentModel";
import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, data: TabsContentModel}>;
  chosenLang: string;
  locations: Array<TabsContentModel> = [];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public service: UmbracoServiceProvider, public popoverCtrl: PopoverController, public translateService: TranslateService) {
    translateService.setDefaultLang('da');
    this.initializeApp();
    this.chosenLang = translateService.getDefaultLang();
    this.startApp();
  }

  presentPopover(optionsEvent) {
    let popover = this.popoverCtrl.create(SettingsPage);
    popover.present({
      ev: optionsEvent
    });
    this.translateService.onLangChange.subscribe((event : LangChangeEvent)=> {
      this.service.getContent(event.lang);
      this.chosenLang = this.translateService.currentLang;
      console.log(this.chosenLang);
      this.startApp();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });
  }

  startApp() {
    this.service.getContent(this.chosenLang).subscribe(result => {
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
