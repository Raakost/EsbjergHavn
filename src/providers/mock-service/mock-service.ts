import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {TabsPage} from "../../pages/tabs/tabs";

@Injectable()
export class MockServiceProvider {

  pages: Array<{ title: string, component: any }>;

  constructor(public http: HttpClient) {
    this.pages = [
      {title: 'Fiskeri- og Søfarts Museet', component: TabsPage},
      {title: 'Mennesket ved Havet', component: TabsPage},
      {title: 'Esbjerg Strand', component: TabsPage},
      {title: 'Nordhavn', component: TabsPage}
    ];
  }

  // Get tabs component and title for sidemenu navigation.
  getMenuItems() {
    return this.pages;
  }

}
