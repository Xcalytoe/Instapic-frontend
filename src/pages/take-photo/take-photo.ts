import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions  } from '@ionic-native/camera';
// import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { OpenCameraPage } from '../open-camera/open-camera';
import { OpenGalleryPage } from '../open-gallery/open-gallery';
/**
 * Generated class for the TakePhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-take-photo',
  templateUrl: 'take-photo.html',
})
export class TakePhotoPage {
public option: any;
public photos : any;
public base64Image : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private camera : Camera, private alertCtrl : AlertController,
    //   private cameraPreview: CameraPreview
    public actionSheetCtrl: ActionSheetController) {
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakePhotoPage');
    // this.takePhoto();
  //  this.openCamera()
  // this.takeShot();
  this.presentActionSheet()
  }
  
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          // role: 'destructive',
          handler: () => {
            this.accessGallery();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takeShot();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
  // cameraPage(){
  //   this.navCtrl.setRoot(OpenCameraPage);
  // }
  // galleryPage(){
  //   this.navCtrl.setRoot(OpenGalleryPage)
  // }
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
 takeShot(){
  const options: CameraOptions = {
    quality: 100,
    targetWidth: window.screen.width,
    targetHeight: window.screen.height,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64:
   let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
 }
//   openCamera(){
//     const cameraPreviewOpts: CameraPreviewOptions = {
//       x: 0,
//       y: 0,
//       width: window.screen.width,
//       height: window.screen.height,
//       camera: 'rear',
//       tapPhoto: true,
//       previewDrag: true,
//       toBack: false,
//       alpha: 1
//     };
    
//     // start camera
//     this.cameraPreview.startCamera(cameraPreviewOpts).then(
//       (res) => {
//         console.log(res)
//       },
//       (err) => {
//         console.log(err)
//       });
    
//     // Set the handler to run every time we take a picture
//     // this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
//       // console.log(result);
//       // do something with the result
//     // });
    
    
//     // picture options
//     const pictureOpts: CameraPreviewPictureOptions = {
//       width: 1280,
//       height: 1280,
//       quality: 85
//     }
    
//     // take a picture
//     // this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
//     //   this.picture = 'data:image/jpeg;base64,' + imageData;
//     // }, (err) => {
//     //   console.log(err);
//     //   this.picture = 'assets/img/test.jpg';
//     // });
//     this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
//     this.base64Image = "data:image/jpeg;base64," + imageData;
//     this.photos.push(this.base64Image);
//     this.photos.reverse();
//   }, (err) => {
//     console.log(err);
//   });
    
    
//     // Switch camera
//     // this.cameraPreview.switchCamera();
    
//     // set color effect to negative
//     // this.cameraPreview.setColorEffect('negative');
    
//     // Stop the camera preview
//     // this.cameraPreview.stopCamera();
//  }
  
//   takePhoto() {
//     const options : CameraOptions = {
//       quality: 50, // picture quality
//       destinationType: this.camera.DestinationType.DATA_URL,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
//     }
//     this.camera.getPicture(options) .then((imageData) => {
//         this.base64Image = "data:image/jpeg;base64," + imageData;
//         this.photos.push(this.base64Image);
//         this.photos.reverse();
//       }, (err) => {
//         console.log(err);
//       });
//   }

//   deletePhoto(index) {
//     let confirm = this.alertCtrl.create({
//         title: 'Sure you want to delete this photo? There is NO undo!',
//         message: '',
//         buttons: [
//           {
//             text: 'No',
//             handler: () => {
//               console.log('Disagree clicked');
//             }
//           }, {
//             text: 'Yes',
//             handler: () => {
//               console.log('Agree clicked');
//               this.photos.splice(index, 1);
//             }
//           }
//         ]
//       });
//     confirm.present();
//   }
//    refresh(){
//     window['location'].reload();
//   }
}
