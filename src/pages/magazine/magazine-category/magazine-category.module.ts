import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineCategoryPage } from './magazine-category';
import { MagazineCategoryModule} from '../../../components/magazine/magazine-category/magazine-category.module';

@NgModule({
  declarations: [
    MagazineCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MagazineCategoryPage),
    MagazineCategoryModule
  ],
})
export class MagazineCategoryPageModule {}
