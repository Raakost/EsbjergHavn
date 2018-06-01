import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {TabsMapPageModel} from "../../models/TabsMapPageModel";


@IonicPage()
@Component({
  selector: 'page-tab-map',
  templateUrl: 'tab-map.html',
})
export class TabMapPage {

  mapUrl: any = undefined;

  constructor( public navParams: NavParams) {
    this.mapUrl = navParams.data;
    console.log(this.mapUrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabMapPage');
  }

}
