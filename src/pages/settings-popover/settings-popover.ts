import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoginPage } from '../login/login';
import { EditProfilePage } from '../edit-profile/edit-profile';
/**
 * Generated class for the SettingsPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings-popover',
  templateUrl: 'settings-popover.html',
  template: `<ion-content>
    <button ion-item (click)="editProfile()"><ion-icon color="primary" ios="ios-create" md="md-create"></ion-icon>&nbsp;  Edit Profile</button>
    <button ion-item (click)="logoutUser()"><ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>&nbsp;  Logout</button>
</ion-content>`,
providers:[ UserServiceProvider ],
})
export class SettingsPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService:UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPopoverPage');
  }
  logoutUser(){
    this.usersService.LogoutUser().then(()=>{
      this.navCtrl.setRoot(LoginPage);
    });
  }
  editProfile(){
    this.navCtrl.setRoot(EditProfilePage);
  }
}
