import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'shop-category',
 	templateUrl: 'shop-category.html'
 })
 export class ShopCategoryComponent {

 	@Input() events: any;
 	@Input() data: any;


 	constructor() {
 		console.log('Hello ShopCategoryComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
