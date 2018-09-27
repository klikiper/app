import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComingSoonPage } from './coming-soon';
import { ComingSoonV1Module } from '../../components/coming-soon/coming-soon-v1/coming-soon-v1.module';
import { ComingSoonV2Module } from '../../components/coming-soon/coming-soon-v2/coming-soon-v2.module';
import { ComingSoonV3Module } from '../../components/coming-soon/coming-soon-v3/coming-soon-v3.module';


@NgModule({
  declarations: [
    ComingSoonPage,
  ],
  imports: [
    IonicPageModule.forChild(ComingSoonPage),
    ComingSoonV1Module,
    ComingSoonV2Module,
    ComingSoonV3Module
  ],
})
export class ComingSoonPageModule {}
