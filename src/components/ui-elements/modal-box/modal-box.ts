import { Component, Input } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
  @IonicPage()
 @Component({
 	selector: 'modal-box',
 	templateUrl: 'modal-box.html'
 })
 export class ModalBoxComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor(public modalCtrl: ModalController, public viewCtrl: ViewController) {
 		console.log('Hello ModalsComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	dismiss() {
 		this.viewCtrl.dismiss();
 	}

 	// lorem impsum

 }
