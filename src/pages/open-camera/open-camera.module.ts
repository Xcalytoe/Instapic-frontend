import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenCameraPage } from './open-camera';

@NgModule({
  declarations: [
    OpenCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenCameraPage),
  ],
})
export class OpenCameraPageModule {}
