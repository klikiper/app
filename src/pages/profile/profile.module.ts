import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { ProfileV1Module} from '../../components/profile/profile-v1/profile-v1.module';
import { ProfileV2Module} from '../../components/profile/profile-v2/profile-v2.module';
import { ProfileV3Module} from '../../components/profile/profile-v3/profile-v3.module';
import { ProfileV4Module} from '../../components/profile/profile-v4/profile-v4.module';
import { ProfileV5Module} from '../../components/profile/profile-v5/profile-v5.module';
import { ProfileV6Module} from '../../components/profile/profile-v6/profile-v6.module';


@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ProfileV1Module,
    ProfileV2Module,
    ProfileV3Module,
    ProfileV4Module,
    ProfileV5Module,
    ProfileV6Module
  ],
})
export class ProfilePageModule {}
