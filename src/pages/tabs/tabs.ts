import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabContentPage} from "../tab-content/tab-content";
import {TabHomePage} from "../tab-home/tab-home";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  page: any;
  om: string = 'om';
  historie: string = 'historie';
  erindringer: string = 'erindringer';
  homeTab = TabHomePage;
  presentTab = TabContentPage;
  pastTab = TabContentPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
