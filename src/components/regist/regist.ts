import { Component } from '@angular/core';

/**
 * Generated class for the RegistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'regist',
  templateUrl: 'regist.html'
})
export class RegistComponent {

  text: string;

  constructor() {
    console.log('Hello RegistComponent Component');
    this.text = 'Hello World';
  }

}
