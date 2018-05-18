import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public viewCtrl: ViewController, public translateService : TranslateService) {
  }

  changeLanguage(language) {
    this.translateService.use(language);
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
