import { Component, Input } from '@angular/core';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'loading',
 	templateUrl: 'loading.html'
 })
 export class LoadingComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor(public loadingCtrl: LoadingController) {
 		console.log('Hello LoadingComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	presentLoading() {
 		this.loadingCtrl.create({
 			content: 'Please wait...',
 			duration: 3000,
 			dismissOnPageChange: true
 		}).present();
 	}

 	// lorem impsum

 }
