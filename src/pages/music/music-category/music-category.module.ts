import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicCategoryPage } from './music-category';
import { MusicCategoryModule} from '../../../components/music/music-category/music-category.module';

@NgModule({
  declarations: [
    MusicCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicCategoryPage),
    MusicCategoryModule
  ],
})
export class MusicCategoryPageModule {}
