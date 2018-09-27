import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'radio',
 	templateUrl: 'radio.html'
 })
 export class RadioComponent {

 	@Input() events: any;
 	@Input() data: any;

 	langs;
 	langForm;

 	constructor() {
 		this.langForm = new FormGroup({
 			"langs": new FormControl({value: 'rust', disabled: false})
 		});
 		console.log('Hello RadioComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	ionViewWillEnter(){
 		console.log('ionViewWillEnter radio');
 	}

 	doSubmit(event) {
 		console.log('Submitting form', this.langForm.value);
 		event.preventDefault();
 	}

 	// lorem impsum

 }
