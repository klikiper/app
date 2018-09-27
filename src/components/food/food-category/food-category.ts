import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'food-category',
 	templateUrl: 'food-category.html'
 })
 export class FoodCategoryComponent {

 	@Input() events: any;
 	@Input() data: any;


 	constructor() {
 		console.log('Hello FoodCategoryComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
