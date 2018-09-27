import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @IonicPage()
 @Component({
 	selector: 'modals',
 	templateUrl: 'modals.html'
 })
 export class ModalsComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor(public modalCtrl: ModalController) {
 		console.log('Hello ModalsComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	openModalBasic(characterNum) {
 		let modal = this.modalCtrl.create('ModalBasicComponent', characterNum);
 		modal.present();
 	}

 	openModalBox(characterNum) {
 		let modal = this.modalCtrl.create('ModalBoxComponent', characterNum);
 		modal.present();
 	}

 	openModalMenu(characterNum) {
 		let modal = this.modalCtrl.create('ModalMenuComponent', characterNum);
 		modal.present();
 	}

 	// lorem impsum

 }
