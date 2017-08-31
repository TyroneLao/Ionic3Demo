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
})
export class TabsPageModule {}
