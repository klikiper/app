import { Component, Input } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'actionsheets',
 	templateUrl: 'actionsheets.html'
 })
 export class ActionSheetsComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor(public actionSheetCtrl: ActionSheetController) {
 		console.log('Hello ActionSheetsComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}


 	presentActionSheet() {
 		let actionSheet = this.actionSheetCtrl.create({
 			title: 'Modify your album',
 			cssClass: 'action-sheets',
 			buttons: [
 			{
 				text: 'Destructive',
 				role: 'destructive',
 				handler: () => {
 					console.log('Destructive clicked');
 				}
 			},{
 				text: 'Archive',
 				handler: () => {
 					console.log('Archive clicked');
 				}
 			},{
 				text: 'Cancel',
 				role: 'cancel',
 				handler: () => {
 					console.log('Cancel clicked');
 				}
 			}
 			]
 		});
 		actionSheet.present();
 	}


 	presentActionSheet_white_opct() {
 		let actionSheet = this.actionSheetCtrl.create({
 			title: 'Modify your album',
 			cssClass: 'action-sheets white-opct',
 			buttons: [
 			{
 				text: 'Destructive',
 				role: 'destructive',
 				handler: () => {
 					console.log('Destructive clicked');
 				}
 			},{
 				text: 'Archive',
 				handler: () => {
 					console.log('Archive clicked');
 				}
 			},{
 				text: 'Cancel',
 				role: 'cancel',
 				handler: () => {
 					console.log('Cancel clicked');
 				}
 			}
 			]
 		});
 		actionSheet.present();
 	}

 	// lorem impsum

 }
