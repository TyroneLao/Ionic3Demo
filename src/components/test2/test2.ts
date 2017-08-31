import { Component } from '@angular/core';

/**
 * Generated class for the Test2Component component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test2',
  templateUrl: 'test2.html'
})
export class Test2Component {

  text: string;

  constructor() {
    console.log('Hello Test2Component Component');
    this.text = 'Hello World';
  }

}
