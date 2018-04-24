import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

declare var $: any;

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})

export class TabHomePage {

  tabHomeContent: any = undefined;
  imageBefore : string;
  imageNow : string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.tabHomeContent = navParams.data;
    this.imageBefore = 'http://localhost:52076' + this.tabHomeContent.BeforeImg;
    this.imageNow = 'http://localhost:52076' + this.tabHomeContent.NowImg;
  }

  initTwenty() {
    $("#container1").twentytwenty();

      // Mesure your images and divide by 2.
      var imgWidth = $("#container1 img").width()/2;

      // On the container, apply a left offset of 50% (screen center) - minus half image width.
      $("#container1").css({"position":"relative","left":"calc(50% - "+ imgWidth+ "px)"});
    //$("#container1").twentytwenty();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

}
