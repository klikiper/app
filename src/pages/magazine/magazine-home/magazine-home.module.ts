import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineHomePage } from './magazine-home';
import { MagazineHomeModule } from '../../../components/magazine/magazine-home/magazine-home.module';

@NgModule({
  declarations: [
    MagazineHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MagazineHomePage),
    MagazineHomeModule
  ],
})
export class MagazineHomePageModule {}
