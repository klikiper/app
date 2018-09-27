import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicListPage } from './music-list';
import { MusicListModule} from '../../../components/music/music-list/music-list.module';

@NgModule({
  declarations: [
    MusicListPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicListPage),
    MusicListModule
  ],
})
export class MusicListPageModule {}
