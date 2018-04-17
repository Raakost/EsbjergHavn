import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MockServiceProvider} from "../../providers/mock-service/mock-service";
import {HomePageModel} from "../../models/HomePageModel";
import {UmbracoServiceProvider} from "../../providers/umbraco-service/umbraco-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content : HomePageModel;

  constructor(public navCtrl: NavController, /*public service: MockServiceProvider,*/ public service: UmbracoServiceProvider) {
   //this.content = service.getHomePage();
    this.service.getFrontPagecontentDa().subscribe(frontPage=> this.content = frontPage);
  }

}
