import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var $:any;

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})

export class TabHomePage {
  page: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.page = navParams.data;
  }

  initTwenty() {
    $("#container1").twentytwenty();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

}
