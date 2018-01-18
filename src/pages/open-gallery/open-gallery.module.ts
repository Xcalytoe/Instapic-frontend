import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenGalleryPage } from './open-gallery';

@NgModule({
  declarations: [
    OpenGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenGalleryPage),
  ],
})
export class OpenGalleryPageModule {}
