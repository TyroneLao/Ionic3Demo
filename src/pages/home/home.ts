import { Component } from '@angular/core';
import {NavController, IonicPage, ModalController} from 'ionic-angular';
import {User} from "../../interfaces/user.interface";
import {ComponentsModule} from "../../components/components.module";
import {RegistComponent} from "../../components/regist/regist";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user : User={
    name:'',
    accout:{
      email:'',
      password:''
    }
  };
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad page-home');
  }

  ionViewDidEnter(){
    console.log('ionViewDidLoad page-home');

    let isRegist:boolean=false;
    if(!isRegist){
      let modal = this.modalCtrl.create("ModalPage");
      modal.present();
      modal.onDidDismiss(()=>{
        console.log('我回来啦');
      })
    }

  }


}
