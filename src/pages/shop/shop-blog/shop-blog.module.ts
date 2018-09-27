import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopBlogPage } from './shop-blog';
import { ShopBlogModule} from '../../../components/shop/shop-blog/shop-blog.module';

@NgModule({
  declarations: [
    ShopBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopBlogPage),
    ShopBlogModule
  ],
})
export class ShopBlogPageModule {}
