import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController  } from 'ionic-angular';
import { Camera, CameraOptions  } from '@ionic-native/camera';


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  public base64Image : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public actionSheetCtrl:ActionSheetController, private camera : Camera,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  LoadOptions(){
    
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change Profile Photo',
      cssClass: 'actionsheet',
      buttons: [
        {
          text: 'Remove Current Photo',
          // role: 'destructive',
          handler: () => {
            
          }
        },
        {
          text: 'Upload Photo',
          handler: () => {
            this.accessGallery();
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

  updatePass(){
      let alert = this.alertCtrl.create({
        title: 'Change Password',
        inputs: [
          {
            name: 'Old-Password',
            placeholder: 'Old password',
            type: 'password'
          },
          {
            name: 'New-Password ',
            placeholder: 'Enter new password',
            type: 'password'
          },
          {
            name: 'Re-enter-new-Password ',
            placeholder: 'Re-enter new Password',
            type: 'password'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Update',
            handler: data => {
              // if (User.isValid(data.username, data.password)) {
              //   // logged in!
              // } else {
              //   // invalid login
              //   return false;
              // }
            }
          }
        ]
      });
      alert.present();
    }
  }
