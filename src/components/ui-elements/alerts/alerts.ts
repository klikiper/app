import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'alerts',
 	templateUrl: 'alerts.html'
 })
 export class AlertsComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor(public alertCtrl: AlertController) {
 		console.log('Hello AlertsComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}



 	baseAlert() {
 		let alert = this.alertCtrl.create({
 			title: 'New Friend!',
 			subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
 			buttons: ['OK']
 		});
 		alert.present();
 	}

 	promptAlert() {
 		let prompt = this.alertCtrl.create({
 			title: 'Login',
 			message: "Enter a name for this new album you're so keen on adding",
 			inputs: [
 			{
 				name: 'title',
 				placeholder: 'Title'
 			},
 			],
 			buttons: [
 			{
 				text: 'Cancel',
 				handler: data => {
 					console.log('Cancel clicked');
 				}
 			},
 			{
 				text: 'Save',
 				handler: data => {
 					console.log('Saved clicked');
 				}
 			}
 			]
 		});
 		prompt.present();
 	}



 	confirmAlert() {
 		let confirm = this.alertCtrl.create({
 			title: 'Use this lightsaber?',
 			message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
 			buttons: [
 			{
 				text: 'Disagree',
 				handler: () => {
 					console.log('Disagree clicked');
 				}
 			},
 			{
 				text: 'Agree',
 				handler: () => {
 					console.log('Agree clicked');
 				}
 			}
 			]
 		});
 		confirm.present();
 	}


 	radioAlert() {
 		let alert = this.alertCtrl.create();
 		alert.setTitle('Lightsaber color');

 		alert.addInput({
 			type: 'radio',
 			label: 'Blue',
 			value: 'blue',
 			checked: true
 		});

 		alert.addButton('Cancel');
 		alert.addButton({
 			text: 'OK',
 			handler: data => {
 				// this.testRadioOpen = false;
 				// this.testRadioResult = data;
 			}
 		});
 		alert.present();
 	}



 	checkboxAlert() {
 		let alert = this.alertCtrl.create();
 		alert.setTitle('Which planets have you visited?');

 		alert.addInput({
 			type: 'checkbox',
 			label: 'Alderaan',
 			value: 'value1',
 			checked: true
 		});

 		alert.addInput({
 			type: 'checkbox',
 			label: 'Bespin',
 			value: 'value2'
 		});

 		alert.addInput({
 			type: 'checkbox',
 			label: 'Bespin',
 			value: 'value2'
 		});

 		alert.addInput({
 			type: 'checkbox',
 			label: 'Bespin',
 			value: 'value2'
 		});

 		alert.addInput({
 			type: 'checkbox',
 			label: 'Bespin',
 			value: 'value2'
 		});

 		alert.addInput({
 			type: 'checkbox',
 			label: 'Bespin',
 			value: 'value2'
 		});

 		alert.addButton('Cancel');
 		alert.addButton({
 			text: 'Okay',
 			handler: data => {
 				console.log('Checkbox data:', data);
 				//this.testCheckboxOpen = false;
 				//this.testCheckboxResult = data;
 			}
 		});
 		alert.present();
 	}

 	// lorem impsum

 }
