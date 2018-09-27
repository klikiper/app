import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubePage } from './youtube';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    YoutubePage
  ],
  imports: [
    IonicPageModule.forChild(YoutubePage),
    PipesModule
  ],
})
export class YoutubePageModule {}
