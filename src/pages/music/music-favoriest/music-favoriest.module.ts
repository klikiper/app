import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicFavoriestPage } from './music-favoriest';
import { MusicFavoriestModule} from '../../../components/music/music-favoriest/music-favoriest.module';

@NgModule({
  declarations: [
    MusicFavoriestPage
  ],
  imports: [
    IonicPageModule.forChild(MusicFavoriestPage),
    MusicFavoriestModule
  ],
})
export class MusicFavoriestPageModule {}
