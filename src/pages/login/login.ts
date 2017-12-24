import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase  from 'firebase';
import { TabsPage } from '../tabs/tabs';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { SignupPage } from '../signup/signup';





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UserServiceProvider,]
})
export class LoginPage {
  public email: string;
  public password: string;

  constructor(public usersService:UserServiceProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submitLogin(){
    var that = this;
  let loading = this.loadingCtrl.create({
    // spinner: 'hide',
    content: 'Please Wait...'
  });
this.usersService.loginUser(this.email,this.password).then(authData=>{
  setTimeout(() => {
  this.navCtrl.setRoot(TabsPage);
  }, 3000);
  loading.dismiss();
  // this.navCtrl.setRoot(Homepage);
},error=>{
  loading.dismiss()
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  let toasting = this.toastCtrl.create({
    message: 'Oops! ' +error,
    duration:3000,
    position: 'top',
  });
  toasting.present();
})
  loading.present();


};
signUpPage(){
  this.navCtrl.push(SignupPage);
}
}
