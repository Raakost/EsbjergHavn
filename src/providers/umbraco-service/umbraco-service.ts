import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { TabsContentModel } from "../../models/TabsContentModel";
import { HomePageModel } from "../../models/HomePageModel";


@Injectable()
export class UmbracoServiceProvider {

  _contentUrl : string = 'http://havnen.samrum.dk/umbraco/api/home/getcontent?lang=';
  _fpUrl : string = 'http://havnen.samrum.dk/umbraco/api/home/GetHomePageModel?lang=';

  constructor(public http: HttpClient) {
  }

  getContent(language : string) : Observable<TabsContentModel[]> {
    return this.http.get(this._contentUrl + language).map(result =>
      result as TabsContentModel[]);
  }

  getFrontPageContent(language : string): Observable<HomePageModel>{
    return this.http.get(this._fpUrl + language).map(result=>
      result as HomePageModel);
  }

}
