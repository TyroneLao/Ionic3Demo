import { Component } from '@angular/core';


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
