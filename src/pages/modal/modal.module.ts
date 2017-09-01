import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import {ComponentsModule} from "../../components/components.module";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ModalPage),
    PipesModule,
  ],
})
export class ModalPageModule {}
