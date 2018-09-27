import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicHomePage } from './music-home';
import { MusicHomeModule} from '../../../components/music/music-home/music-home.module';

@NgModule({
  declarations: [
    MusicHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MusicHomePage),
    MusicHomeModule
  ],
})
export class MusicHomePageModule {}
