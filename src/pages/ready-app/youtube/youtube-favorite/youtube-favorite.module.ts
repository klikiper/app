import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubeFavoritePage } from './youtube-favorite';
import { PipesModule } from '../../../../pipes/pipes.module';
@NgModule({
  declarations: [
    YoutubeFavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubeFavoritePage),
    PipesModule
  ],
})
export class YoutubeFavoritePageModule {}
