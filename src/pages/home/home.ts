import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePageModel} from "../../models/HomePageModel";
import {UmbracoServiceProvider} from "../../providers/umbraco-service/umbraco-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content : HomePageModel;
  image : string;

  constructor(public navCtrl: NavController, public service: UmbracoServiceProvider) {
    this.service.getFrontPagecontentDa().subscribe(frontPage=>
    {this.content = frontPage,
    this.image = 'http://localhost:52076' + this.content.Img});
  }

}
