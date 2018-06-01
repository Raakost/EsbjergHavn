import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {TabContentPage} from "../tab-content/tab-content";
import {TabHomePage} from "../tab-home/tab-home";
import {TabMapPage} from "../tab-map/tab-map";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  page: any;
  homeTab = TabHomePage;
  presentTab = TabContentPage;
  pastTab = TabContentPage;
  mapTab = TabMapPage;

  constructor(public navParams: NavParams) {
    this.page = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
