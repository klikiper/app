import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-music-home',
 	templateUrl: 'music-home.html',
 })
 export class MusicHomePage {
 	data: any={};
 	events: any={};

 	check_search: boolean = false;

 	
 	constructor(public navCtrl: NavController, public navParams: NavParams) {

 		this.events.openPlayer=function(item){
 			navCtrl.push('MusicPlayerPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MusicHomePage');
 	}


 	show_search(){
 		if(this.check_search == true){
 			this.check_search = false;
 		}else{
 			this.check_search = true;
 		}
 	}
 }
