import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TakePhotoPage } from '../take-photo/take-photo';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';
// import { HomePage } from '../home/home';
// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = ContactPage;
  tab4Root = TakePhotoPage;
  tab5Root = SearchPage;

  constructor() {

  }
}
