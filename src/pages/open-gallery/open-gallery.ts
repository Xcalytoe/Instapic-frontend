import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions  } from '@ionic-native/camera';


/**
 * Generated class for the OpenGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-gallery',
  templateUrl: 'open-gallery.html',
})
export class OpenGalleryPage {
  base64Image:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera : Camera,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenGalleryPage');
    this.accessGallery()
  }
  accessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
     }).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,'+imageData;
      }, (err) => {
       console.log(err);
     });
   }
}
