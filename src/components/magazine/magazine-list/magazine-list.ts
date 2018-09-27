import { Component, Input } from '@angular/core';

/**
 * Generated class for the MagazineListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'magazine-list',
 	templateUrl: 'magazine-list.html'
 })
 export class MagazineListComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor() {
 		console.log('Hello MagazineListComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
