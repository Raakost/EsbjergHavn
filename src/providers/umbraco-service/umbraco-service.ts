import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {TabsContentModel} from "../../models/TabsContentModel";
import {HomePageModel} from "../../models/HomePageModel";


@Injectable()
export class UmbracoServiceProvider {

  URLda : string = 'http://localhost:52076/umbraco/api/home/getcontent?lang=da';
  URLFrontPageda : string = 'http://localhost:52076/umbraco/api/home/GetHomePageModel?lang=da';
  URLda : string = 'http://havnen.samrum.dk/umbraco/api/home/getcontent?lang=da';
  URLFrontPageda : string = 'http://havnen.samrum.dk/umbraco/api/home/GetHomePageModel?lang=da';

  constructor(public http: HttpClient) {
    console.log('Hello UmbracoServiceProvider Provider');
  }

  getContentDa() : Observable<TabsContentModel[]> {
    return this.http.get(this.URLda).map(result =>
    result as TabsContentModel[]);
  }

  getFrontPagecontentDa(): Observable<HomePageModel>{
    return this.http.get(this.URLFrontPageda).map(result=>
    result as HomePageModel);
  }

}
