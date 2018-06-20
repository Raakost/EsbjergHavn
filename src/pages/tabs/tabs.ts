import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {TabContentPage} from "../tab-content/tab-content";
import {TabHomePage} from "../tab-home/tab-home";
import {TabMapPage} from "../tab-map/tab-map";
import {PastPresentModel} from "../../models/PastPresentModel";

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
    let markers: Array<PastPresentModel> = [];
    let pastList = this.page.PastList.filter((item) => item.Latitude !== "" && item.Longitude !== "");
    let presentList = this.page.PresentList.filter((item) => item.Latitude !== "" && item.Longitude !== "");
    markers = [...pastList, ...presentList];
    this.page.Map.Markers = markers;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
