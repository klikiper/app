import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineDetailPage } from './magazine-detail';
import { BlogPostDetailModule } from '../../../components/blog/blog-post-detail/blog-post-detail.module';

@NgModule({
  declarations: [
    MagazineDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MagazineDetailPage),
    BlogPostDetailModule
  ],
})
export class MagazineDetailPageModule {}
