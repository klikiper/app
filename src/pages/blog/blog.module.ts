import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from './blog';
import { BlogBasicModule } from '../../components/blog/blog-basic/blog-basic.module';
import { BlogTimelineModule } from '../../components/blog/blog-timeline/blog-timeline.module';
import { BlogPostDetailModule } from '../../components/blog/blog-post-detail/blog-post-detail.module';

@NgModule({
  declarations: [
    BlogPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogPage),
    BlogBasicModule,
    BlogTimelineModule,
    BlogPostDetailModule
  ],
})
export class BlogPageModule {}
