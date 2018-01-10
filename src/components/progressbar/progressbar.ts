import { Component, Input } from '@angular/core';
// import { Input } from '@angular/core/src/metadata/directives';

/**
 * Generated class for the ProgressbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progressbar',
  templateUrl: 'progressbar.html'
})
export class ProgressbarComponent {

  text: string;
  @Input('progress') progress;

  constructor() {
    console.log('Hello ProgressbarComponent Component');
    this.text = 'Hello World';
  }

}
