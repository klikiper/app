import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { AboutV1Module } from '../../components/about/about-v1/about-v1.module';
import { AboutV2Module } from '../../components/about/about-v2/about-v2.module';
import { AboutV3Module } from '../../components/about/about-v3/about-v3.module';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    AboutV1Module,
    AboutV2Module,
    AboutV3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutPageModule {}
