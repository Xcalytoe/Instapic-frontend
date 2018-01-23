import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TakePhotoPage } from '../take-photo/take-photo';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';
import { NavController } from 'ionic-angular/navigation/nav-controller';
// import { HomePage } from '../home/home';
// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = ProfilePage;
  // tab3Root = ContactPage;
  // tab4Root = TakePhotoPage;
  // tab5Root = SearchPage;
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;

  constructor(public navCtrl:NavController) {
    this.tab1Root = HomePage;
  this.tab2Root = ProfilePage;
  this.tab3Root = ContactPage;
  this.tab4Root = TakePhotoPage;
  this.tab5Root = SearchPage;

  }
  // presentActionSheet(){
  //   this.navCtrl.setRoot(TakePhotoPage);
  // }
}
