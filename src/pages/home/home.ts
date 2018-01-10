import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import{ ImageModalPage } from '../image-modal/image-modal';
import{ ImageModal2Page } from '../image-modal2/image-modal2';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public buttonClicked: boolean = false;
  public comment() {
    this.buttonClicked = !this.buttonClicked;
}

  constructor(public navCtrl: NavController, public modalCtrl:ModalController,
    public alertCtrl:AlertController, public popoverCtrl: PopoverController) {

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
