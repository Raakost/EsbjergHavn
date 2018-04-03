import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MockServiceProvider} from "../../providers/mock-service/mock-service";
import {HomePageModel} from "../../models/HomePageModel";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content : HomePageModel;

  constructor(public navCtrl: NavController, public service: MockServiceProvider) {
   this.content = service.getHomePage();
  }

}
