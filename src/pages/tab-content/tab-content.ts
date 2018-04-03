import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PastPresentModel} from "../../models/PastPresentModel";

@IonicPage()
@Component({
  selector: 'page-tab-content',
  templateUrl: 'tab-content.html',
})
export class TabContentPage {

  tabContent: Array<PastPresentModel>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.tabContent = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabContentPage');
  }

}
