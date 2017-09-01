import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs';
import {ComponentsModule} from "../../components/components.module";
import {RegistComponent} from "../../components/regist/regist";

@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    FormsModule,
    ComponentsModule,
    IonicPageModule.forChild(TabsPage),
  ],

  entryComponents:[RegistComponent]
})
export class TabsPageModule {}
