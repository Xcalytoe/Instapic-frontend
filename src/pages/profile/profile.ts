import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { SettingsPopoverPage } from '../settings-popover/settings-popover'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  settingsPop(){
    let popover = this.popoverCtrl.create(SettingsPopoverPage, {}, {cssClass : 'SettingsPop'});
      popover.present();
    }
}
