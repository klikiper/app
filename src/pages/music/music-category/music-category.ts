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
 	selector: 'page-music-category',
 	templateUrl: 'music-category.html',
 })
 export class MusicCategoryPage {
 	data: any={};
 	events: any={};
 	check_search: boolean = false;

 	
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.events.openList=function(item){
 			navCtrl.push('MusicListPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MusicCategoryPage');
 	}

 	show_search(){
 		if(this.check_search == true){
 			this.check_search = false;
 		}else{
 			this.check_search = true;
 		}
 	}

 }
