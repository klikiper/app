import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineListPage } from './magazine-list';
import { MagazineListModule } from '../../../components/magazine/magazine-list/magazine-list.module';

@NgModule({
  declarations: [
    MagazineListPage,
  ],
  imports: [
    IonicPageModule.forChild(MagazineListPage),
    MagazineListModule
  ],
})
export class MagazineListPageModule {}
