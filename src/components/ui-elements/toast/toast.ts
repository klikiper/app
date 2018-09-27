import { Component, Input } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'toast',
 	templateUrl: 'toast.html'
 })
 export class ToastComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor(public toastCtrl: ToastController) {
 		console.log('Hello ToastComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	showToast(position: string) {
 		let toast = this.toastCtrl.create({
 			message: 'Mmmm, buttered toast',
 			duration: 2000,
 			position: position
 		});

 		toast.present(toast);
 	}

 	showToastWithCloseButton() {
 		const toast = this.toastCtrl.create({
 			message: 'Your files were successfully saved',
 			showCloseButton: true,
 			closeButtonText: 'Ok'
 		});
 		toast.present();
 	}

 	showLongToast() {
 		let toast = this.toastCtrl.create({
 			message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
 			duration: 2000,
 		});
 		toast.present();
 	}


 	showBgColorToast(position: string, css_class: string) {
 		let toast = this.toastCtrl.create({
 			message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
 			duration: 2000,
 			position: position,
 			cssClass: css_class
 		});
 		toast.present();
 	}

 	// lorem impsum

 }
