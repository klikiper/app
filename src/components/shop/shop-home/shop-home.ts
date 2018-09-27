import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'shop-home',
 	templateUrl: 'shop-home.html'
 })
 export class ShopHomeComponent {

 	@Input() events: any;
 	@Input() data: any;


 	constructor() {
 		console.log('Hello ShopHomeComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
