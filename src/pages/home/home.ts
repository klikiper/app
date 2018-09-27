import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Events,MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingsProvider } from '../../providers/settings/settings';
import { MenuProvider } from '../../providers/menu/menu';
//import { Http, Headers,URLSearchParams } from '@angular/http';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-home',
 	templateUrl: 'home.html',
 })
 export class HomePage {
 	@ViewChild('slide') slide3: any;
 	settings: any;
 	params: any={};
 	events: any={};
 	data: any={};
 	open_more:any=new Array();
 	pages: any;

 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		public settingsProvider:SettingsProvider,
 		public menuCtrl:MenuController,
 		public menuProvider:MenuProvider,
 		actions:Events) {
 		
 		this.pages = this.menuProvider.getContent();
 		let that = this;

 		this.settingsProvider.getSettings().then(data=>{
 			this.settings=data;
 			this.menuCtrl.enable(true, this.settings.menu_id);
 		})
 	}

 	openPage(menuItem) {
 		if(menuItem.subPage!=undefined){
 			this.navCtrl.popToRoot().then(()=>{
 				this.navCtrl.setRoot(menuItem.page,{'subPage':menuItem.subPage,'pages':menuItem.pages});
 			})
 		}else{
 			if(menuItem.layout!=undefined && menuItem.layout=='tabs'){
 				this.navCtrl.popToRoot().then(()=>{
 					this.navCtrl.push(menuItem.page);
 				})
 			}else{
 				this.navCtrl.popToRoot().then(()=>{
 					this.navCtrl.setRoot(menuItem.page);
 				});
 			}
 		}
 	}

 	slide_next(){
 		this.slide3.slideNext();
 	}

 	slide_prev(){
 		this.slide3.slidePrev();
 	}

 }
