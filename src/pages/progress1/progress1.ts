import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Progress1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progress1',
  templateUrl: 'progress1.html',
  template: `<ion-content>
  <ion-item-group>
    <ion-item-divider color="light">
    <ion-icon ios="ios-thumbs-up" md="md-thumbs-up" color="primary"></ion-icon> Likes
    </ion-item-divider>
    <ion-item>Victor</ion-item>
    <ion-item>Xandy</ion-item>
  </ion-item-group>
</ion-content>`
})
export class Progress1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Progress1Page');
  }

}
