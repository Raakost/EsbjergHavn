import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  chosenLang : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public translateService : TranslateService) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  changeLanguage(language) {
    this.translateService.use(language);
    this.chosenLang = language;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
