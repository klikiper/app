import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPlayerPage } from './music-player';
import { MusicPlayerModule} from '../../../components/music/music-player/music-player.module';

@NgModule({
  declarations: [
    MusicPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicPlayerPage),
    MusicPlayerModule
  ],
})
export class MusicPlayerPageModule {}
