import { Component, Input } from '@angular/core';

/**
 * Generated class for the MagazineCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'magazine-category',
 	templateUrl: 'magazine-category.html'
 })
 export class MagazineCategoryComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor() {
 		console.log('Hello MagazineCategoryComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
