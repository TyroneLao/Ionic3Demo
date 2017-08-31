import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs';


@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(TabsPage),
  ],

  entryComponents:[]
})
export class TabsPageModule {}
