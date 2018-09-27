import { Component, Input } from '@angular/core';
import { MenuController } from 'ionic-angular';
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
 	selector: 'setting-sidemenu',
 	templateUrl: 'setting-sidemenu.html'
 })
 export class SettingSidemenuPage {
 	constructor(public menu: MenuController,public settingsProvider:SettingsProvider) {
 		menu.enable(true);
 	}

 	open_menu(id_menu){
 		this.settingsProvider.setMenu(id_menu).then(data=>{
 		  this.menu.enable(false);
 		  this.menu.enable(true, id_menu);
 		  this.menu.open(id_menu);
 		})
 	}
 }
