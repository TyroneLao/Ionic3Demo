import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";



@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public item;
  sanitizeHtml;
  Catcha;
  constructor(public navCtrl: NavController, public navParams: NavParams, public  sanitizer: DomSanitizer) {
    // this.sanitizeHtml= sanitizer.bypassSecurityTrustHtml(this.navParams.get('innerHtml'));
    this.sanitizeHtml=this.navParams.get('innerHtml')
    this.Catcha = this.sanitizer.bypassSecurityTrustHtml(this.navParams.get('innerHtml'));
    console.log();
  }
  onInit():void{
    // this.Catcha = this.sanitizer.bypassSecurityTrustHtml('要进行转换的内容');
    // 这里比如返回的一个html内容，或是其它如一张 svg 的图等，用上面代码转一下就可以了，就不会那那个错误了。
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');


  }


}
