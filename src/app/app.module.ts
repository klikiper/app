import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Camera } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MasonryModule } from 'angular2-masonry';


/*translate loader*/
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/*end translate loader*/
export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { Firebase } from '@ionic-native/firebase';

/*Utils Services*/
import { MenuProvider } from '../providers/menu/menu';
import { ToastService } from '../providers/toast-service/toast-service';
import { LoadingService } from '../providers/loading-service/loading-service';
import { HelperProvider } from '../providers/helper/helper';
/*End Utils Services*/

/**ready app service**/
//twitter
import { TwitterService } from 'ng2-twitter';
//facebook
import { FacebookService } from '../providers/facebook/facebook';
//instagram
import { InstagramService } from '../providers/instagram/instagram';
//twitter
import { TwitterProvider } from '../providers/twitter/twitter';
//unsplash 
import { UnsplashService } from '../providers/unsplash-service/unsplash-service';
//wordpress 
import { WordpressService } from '../providers/wordpress/wordpress';
//rss service
import { RssService } from '../providers/rss-service/rss-service';
//youtube
import { YoutubeService } from '../providers/youtube-service/youtube-service';
import { SettingsProvider } from '../providers/settings/settings';
/**end ready app service **/


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    MasonryModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    InAppBrowser,
    Camera,
    PhotoLibrary,
    CallNumber,
    SMS,
    Firebase,
    EmailComposer,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuProvider,
    ToastService,
    HelperProvider,
    LoadingService,
    FacebookService,
    InstagramService,
    TwitterService,
    TwitterProvider,
    YoutubeVideoPlayer,
    YoutubeService,
    RssService,
    UnsplashService,
    WordpressService,
    SettingsProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
