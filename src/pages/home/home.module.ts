import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { HomePage } from '../../pages/home/home';

@NgModule({
    declarations:[HomePage],
    imports:[IonicPageModule.forChild(HomePage)]
})
export class HomePageModule{

}
