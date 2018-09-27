import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import { GridGalleryModule } from '../../components/gallery/grid-gallery/grid-gallery.module';
import { InfoGalleryModule } from '../../components/gallery/info-gallery/info-gallery.module';
import { ShotsGalleryModule } from '../../components/gallery/shots-gallery/shots-gallery.module';
import { MasonryGalleryModule } from '../../components/gallery/masonry-gallery/masonry-gallery.module';
import { ListedGalleryModule } from '../../components/gallery/listed-gallery/listed-gallery.module';
import { HorizontalGalleryModule } from '../../components/gallery/horizontal-gallery/horizontal-gallery.module';
import { GalleryModalModule } from '../../components/gallery/gallery-modal/gallery-modal.module';

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
    GridGalleryModule,
    InfoGalleryModule,
    ShotsGalleryModule,
    ListedGalleryModule,
    HorizontalGalleryModule,
    MasonryGalleryModule
  ],
})
export class GalleryPageModule {}
