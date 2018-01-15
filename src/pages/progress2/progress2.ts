import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Progress2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progress2',
  templateUrl: 'progress2.html',
  template: `<ion-content>
  <ion-item-group>
    <ion-item-divider color="light">
    <ion-icon ios="ios-thumbs-up" md="md-thumbs-up" color="primary"></ion-icon> Likes
    </ion-item-divider>
    <ion-item>Boss_Kay</ion-item>
    <ion-item>Maximus</ion-item>
    <ion-item>Paul</ion-item>
    <ion-item>Hayway</ion-item>
  </ion-item-group>
</ion-content>`
})
export class Progress2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Progress2Page');
  }

}
