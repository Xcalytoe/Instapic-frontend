import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import{ ImageModalPage } from '../image-modal/image-modal';
import{ ImageModal2Page } from '../image-modal2/image-modal2';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Progress1Page } from '../progress1/progress1'
import { Progress2Page } from '../progress2/progress2'

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
  photo1() {
    let popover = this.popoverCtrl.create(ImageModalPage, {}, {cssClass : 'custom-popover'});
      popover.present();
    }
 
photo2() {
  let popover = this.popoverCtrl.create(ImageModal2Page, {}, {cssClass : 'custom-popover'});
    popover.present();
  }
progress1(){
  let popover = this.popoverCtrl.create(Progress1Page, {}, {cssClass : 'progress1'});
    popover.present();
  }
progress2(){
  let popover = this.popoverCtrl.create(Progress2Page, {}, {cssClass : 'progress2'});
    popover.present();
  }
}
