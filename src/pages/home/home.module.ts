import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { HomePage } from '../../pages/home/home';
import {ComponentsModule} from "../../components/components.module";
import {RegistComponent} from "../../components/regist/regist";

@NgModule({
    declarations:[HomePage],
    imports:[ComponentsModule,IonicPageModule.forChild(HomePage)],
    entryComponents:[RegistComponent]
})
export class HomePageModule{
}
