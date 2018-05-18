import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePageModel} from "../../models/HomePageModel";
import {UmbracoServiceProvider} from "../../providers/umbraco-service/umbraco-service";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content : HomePageModel;

  constructor(public navCtrl: NavController, public service: UmbracoServiceProvider, public translateService : TranslateService) {
    this.getFrontPageContent();
    translateService.onLangChange.subscribe((event : LangChangeEvent)=> {
      this.getFrontPageContent(event.lang);
    });

  }

  getFrontPageContent(language? : string){
    if(!language ){
      language = this.translateService .getDefaultLang();
    }
    this.service.getFrontPageContent( language).subscribe(frontPage =>{
      this.content = frontPage;
    });
  }

}
