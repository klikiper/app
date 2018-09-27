import { Component, Input } from '@angular/core';

/**
 * Generated class for the MagazineListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'magazine-home',
 	templateUrl: 'magazine-home.html'
 })
 export class MagazineHomeComponent {
 	@Input() events: any;
 	@Input() data: any;
 	
 	constructor() {
 		console.log('Hello MagazineHomeComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
