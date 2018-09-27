import { Component} from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';
import { SettingsProvider } from '../../../providers/settings/settings';
/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @IonicPage()
 @Component({
 	selector: 'setting-color',
 	templateUrl: 'setting-color.html'
 })
 export class SettingColorPage {
 	list: Array<any>=new Array();
 	settings: any=null
 	selected_skin:any=1;

 	constructor(
	 public settingsProvider:SettingsProvider,
	 public events:Events
 	  ) {
	  this.list=this.settingsProvider.getSkins();
	  this.settingsProvider.getSettings().then(data=>{
	  	this.settings=data;
	  	this.selected_skin=this.settingsProvider.getIndexOf(this.settings.skin.main_bg,this.list);
	  })
 	}

 	setSkin(){
 		this.settingsProvider.setSkin(this.list[this.selected_skin]).then(data=>{
 			this.events.publish('settings_change: change',data);
 			this.settings=data;
 		});
 	}

 }
