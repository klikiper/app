import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'select',
 	templateUrl: 'select.html'
 })
 export class SelectComponent {

 	@Input() events: any;
 	@Input() data: any;

 	gaming: string = "n64";
	gender: string = "f";
	os: string;
	music: string;
	month: string;
	year: number;
	musicAlertOpts: { title: string, subTitle: string };

 	constructor() {
 		this.musicAlertOpts = {
	      title: '1994 Music',
	      subTitle: 'Select your favorite'
	    };
 		console.log('Hello SelectComponent Component');
 	}

 	stpSelect() {
	    console.log('STP selected');
	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	// lorem impsum

 }
