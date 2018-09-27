import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the BlogTimelineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'blog-timeline',
 	templateUrl: 'blog-timeline.html'
 })
 export class BlogTimelineComponent {
 	@Input() data: any;
 	@Input() events: any;

 	newfeed: any="from_you";

 	constructor( public navCtrl: NavController, public loadingCtrl: LoadingController ) {
 		console.log('ionViewWillEnter Blog Timeline');
 	}


 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}


 }
