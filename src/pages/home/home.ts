import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import{ ImageModalPage } from '../image-modal/image-modal';
import{ ImageModal2Page } from '../image-modal2/image-modal2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public popoverCtrl: PopoverController) {

  }
  photo1(myEvent) {
    let popover = this.popoverCtrl.create(ImageModalPage);
    popover.present({
      ev: myEvent
    });
  }
 
 photo2(myEvent) {
    let popover = this.popoverCtrl.create(ImageModal2Page);
    popover.present({
      ev: myEvent
    });
  }
}
