import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LaunchNavigator} from "@ionic-native/launch-navigator";

declare var $: any;

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})

export class TabHomePage {

  tabHomeContent: any = undefined;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private launchNavigator: LaunchNavigator) {
    this.tabHomeContent = navParams.data;
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

  Navigation(){
    var lat = 55.4666;
    var long = 8.4615;

    var havneCoords = lat.toString() + ", " + long.toString();
    this.launchNavigator.navigate(havneCoords);
  }

}
