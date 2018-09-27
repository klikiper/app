import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicFavoriestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-music-favoriest',
 	templateUrl: 'music-favoriest.html',
 })
 export class MusicFavoriestPage {
 	data: any={};
 	events: any={};
 	
 	check_search: boolean = false;


 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.events.openPlayer=function(item){
 			navCtrl.push('MusicPlayerPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MusicFavoriestPage');
 	}


 	show_search(){
 		if(this.check_search == true){
 			this.check_search = false;
 		}else{
 			this.check_search = true;
 		}
 	}

 }
