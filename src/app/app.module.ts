import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import{ TakePhotoPage } from '../pages/take-photo/take-photo';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase  from 'firebase';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { ImageModalPage } from '../pages/image-modal/image-modal';
import { ImageModal2Page } from '../pages/image-modal2/image-modal2';
import { ProgressbarComponent } from '../components/progressbar/progressbar'

 // Initialize Firebase
 export const config = {
  apiKey: "AIzaSyBc0AwJSAnYiSRnlQfhT0rjfGAkvD9QfIo",
  authDomain: "instapic-37c52.firebaseapp.com",
  databaseURL: "https://instapic-37c52.firebaseio.com",
  projectId: "instapic-37c52",
  storageBucket: "instapic-37c52.appspot.com",
  messagingSenderId: "1013801939378"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    LoginPage,
    TabsPage,
    SignupPage,
    ProgressbarComponent,
    TakePhotoPage,
    SearchPage,
    ImageModalPage,
    ImageModal2Page,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ImageModalPage,
    AboutPage,
    ContactPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    TakePhotoPage,
    SearchPage,
    ImageModal2Page,
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
