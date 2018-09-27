import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MusicCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-music-player',
 	templateUrl: 'music-player.html',
 })
 export class MusicPlayerPage {
 	data: any={};
 	events: any={};
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.events.openPlayer=function(item){
 			navCtrl.push('MusicPlayerPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MusicPlayerPage');
 	}

 }
