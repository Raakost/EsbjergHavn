import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TabsPage} from "../../pages/tabs/tabs";
import {TabsContentModel} from "../../models/TabsContentModel";
import {PastPresentModel} from "../../models/PastPresentModel";
import {TabsHomePageModel} from "../../models/TabsHomePageModel";
import {HomePageModel} from "../../models/HomePageModel";


@Injectable()
export class MockServiceProvider {

  pages: Array<{ title: string, component: any, pageData: any }>;
  presentImagesList: Array<PastPresentModel>;
  pastImagesList: Array<PastPresentModel>;
  tabHomePage: any;
  homePage: any;
  tabContent: any = TabsContentModel;
  past: any = PastPresentModel;
  present: any = PastPresentModel;

  constructor(public http: HttpClient) {
    this.homePage = new HomePageModel(1,
      'Titel',
      'En beskrivelse her.....',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg' );

    this.past = new PastPresentModel(1,
      '1. En lille beskrivelse til billedet...',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg');

    this.present = new PastPresentModel(2,
      '1. En lille beskrivelse til billedet...',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg');

    this.pastImagesList = [this.past, this.past];
    this.presentImagesList = [this.present, this.present];

    this.tabHomePage = new TabsHomePageModel(1,
      'En lille beskrivelse',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
      'https://dummyimage.com/600x400/f1f1f1/ffffff.jpg',
      123467,
      7654321);

    this.tabContent = new TabsContentModel(1, this.tabHomePage, this.presentImagesList, this.pastImagesList);

    this.pages = [
      {title: 'Fiskeri- og Søfarts Museet', component: TabsPage, pageData: this.tabContent},
      {title: 'Mennesket ved Havet', component: TabsPage, pageData: this.tabContent},
      {title: 'Esbjerg Strand', component: TabsPage, pageData: this.tabContent},
      {title: 'Nordhavn', component: TabsPage, pageData: this.tabContent}
    ];
  };

  // Get tabs component and title for sidemenu navigation.
  getMenuItems() {
    return this.pages;
  }

  // Get content for homepage (the app's frontpage..)
  getHomePage() {
    return this.homePage;
  }

}
