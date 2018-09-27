import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuProvider } from '../providers/menu/menu';
import { SettingsProvider } from '../providers/settings/settings';

@Component({
  templateUrl: 'app.html',
  providers:[MenuProvider, Events]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  pages:any;
  settings:any=null;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    public storage: Storage,
    public menuProvider:MenuProvider,
    public app:App,
    public settingsProvider: SettingsProvider
    ) {
    this.initializeApp();
    this.pages=this.menuProvider.getContent();
    this.settingsProvider.getSettings().then(data=>{
      this.settings=data;
      console.log(this.settings);
    })

    this.events.subscribe('settings_change: change', (data) => {
         this.settings=data;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(menuItem) {
    if(menuItem.subPage!=undefined){
      this.nav.popToRoot().then(()=>{
        this.nav.setRoot(menuItem.page,{'subPage':menuItem.subPage,'pages':menuItem.pages});
      })
    }else{
      if(menuItem.layout!=undefined && menuItem.layout=='tabs'){
        this.nav.popToRoot().then(()=>{
          this.nav.push(menuItem.page);
        })
      }else{
        this.nav.popToRoot().then(()=>{
          this.nav.setRoot(menuItem.page);
        });
      }
    }
  }

}
