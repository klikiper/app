import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubeDetailPage } from './youtube-detail';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [
    YoutubeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubeDetailPage),
    PipesModule
  ],
})
export class YoutubeDetailPageModule {}
