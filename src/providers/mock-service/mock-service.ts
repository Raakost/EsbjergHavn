import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TabsContentModel} from "../../models/TabsContentModel";
import {PastPresentModel} from "../../models/PastPresentModel";
import {TabsHomePageModel} from "../../models/TabsHomePageModel";
import {HomePageModel} from "../../models/HomePageModel";


@Injectable()
export class MockServiceProvider {

  pages: Array<{title: string, component: any, data: any}>;

  presentImagesList: Array<PastPresentModel>;
  pastImagesList: Array<PastPresentModel>;
  tabHomePage : TabsHomePageModel;
  homePage : HomePageModel;
  tabContent : TabsContentModel;
  past : PastPresentModel;
  present : PastPresentModel;
  past1 : PastPresentModel;
  present1 : PastPresentModel;

  constructor(public http: HttpClient) {
    /*this.past = new PastPresentModel(
      1,
      'Fortid - En titel',
      'En lille beskrivelse til billedet...',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
      'https://www.youtube.com/watch?v=WCAKM2bivqo');

    this.present = new PastPresentModel(
      2,
      'Nutid - En titel',
      'En lille beskrivelse til billedet...',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
      'https://www.youtube.com/watch?v=WCAKM2bivqo');

    this.past1 = new PastPresentModel(
      1,
      'Fortid - En titel (2)',
      'En lille beskrivelse til billedet...',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg');

    this.present1 = new PastPresentModel(
      2,
      'Nutid - En titel (2)',
      'En lille beskrivelse til billedet...',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg');

    this.pastImagesList = [this.past, this.past1];
    this.presentImagesList = [this.present, this.present1];

    this.tabHomePage = new TabsHomePageModel(
      1,
      'En lille beskrivelse af dette område....',
      'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
      'https://dummyimage.com/600x400/f1f1f1/ffffff.jpg',
      123467,
      7654321);

    this.tabContent = new TabsContentModel(1, this.tabHomePage, this.presentImagesList, this.pastImagesList);

    this.pages = [
      {title: 'Fiskeri- og Søfarts Museet', component: TabsPage, data: this.tabContent},
      {title: 'Mennesket ved Havet', component: TabsPage, data: this.tabContent},
      {title: 'Esbjerg Strand', component: TabsPage, data: this.tabContent},
      {title: 'Nordhavn', component: TabsPage, data: this.tabContent}
    ];

    this.homePage = new HomePageModel(
      1,
      'Appens formål',
      'En beskrivelse af appens formål, evt et kort med alle placeringer markeret på et kort.',
      'https://www.dropbox.com/s/g1bn8rqzubojssn/esbjerghavn.JPG?dl=1',
      [this.tabContent]
    );*/
  };

  // Get tabs component and title for sidemenu navigation.
  getMenuItems() {
    return this.pages;
  }

  // Get content for homepage (the app's frontpage..)
  getHomePage() : HomePageModel {
    return this.homePage;
  }

}
