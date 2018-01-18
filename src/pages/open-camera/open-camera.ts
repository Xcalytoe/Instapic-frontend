import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions  } from '@ionic-native/camera';


/**
 * Generated class for the OpenCameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-camera',
  templateUrl: 'open-camera.html',
})
export class OpenCameraPage {
  public option: any;
  public photos : any;
  public base64Image : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera : Camera,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenCameraPage');
    this.takeShot()
  }
  takeShot(){
    const options: CameraOptions = {
      quality: 100,
      targetWidth: window.screen.width,
      targetHeight: window.screen.height,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      // mediaType: this.camera.MediaType.PICTURE,
      mediaType:this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = "data:image/jpeg;base64," + imageData;
     this.photos.push(this.base64Image);
     this.photos.reverse();
   }, (err) => {
     console.log(err);
   });
   }
}
