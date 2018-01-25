import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import * as firebase  from 'firebase';
import { TabsPage } from '../tabs/tabs';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers:[ UserServiceProvider ],
})
export class SignupPage {
  public email: string;
  public fullname: any;
  public username: any;
  public password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public usersService:UserServiceProvider, public loadingCtrl:LoadingController,
    public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUpUser(){
    var account = {
      email: this.email,
      fullname : this.fullname,
      username : this.username,
      password: this.password,
    }
    var that =this;
    let loading = this.loadingCtrl.create({
      // spinner: 'hide',
      content: 'Please Wait...'
    });
    loading.present();
    this.usersService.signupUserService(account).then(authData=>{
      loading.dismiss();
      this.navCtrl.setRoot(TabsPage);
    },error =>{
        loading.dismiss();
        setTimeout(() => {
          loading.dismiss();
        }, 5000);
      let toasting = this.toastCtrl.create({
        message: 'Oops! ' +error,
        duration:3000,
        position: 'top',
      });
      toasting.present();
    });
    }
    loginPage(){
      this.navCtrl.setRoot(LoginPage);
    }
}
