import { Component} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SettingsProvider } from '../../../providers/settings/settings';
/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @IonicPage()
 @Component({
 	selector: 'setting-dashboard',
 	templateUrl: 'setting-dashboard.html'
 })
 export class SettingDashboardPage {
 	settings:any={};
 	constructor(
 	 public settingsProvider:SettingsProvider
 	  ) {
	  this.settingsProvider.getSettings().then(data=>{
	  	this.settings=data;
	  })
 	}

 	setDashboard(){
 	   this.settingsProvider.setDashboard(this.settings.dashboard_type);
 	}

 }
