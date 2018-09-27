import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopBlogComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'food-favorites',
 	templateUrl: 'food-favorites.html'
 })
 export class FoodFavoritesComponent {

 	@Input() events: any;
 	@Input() data: any;

 	bookmark: any='recently';

 	constructor() {
 		console.log('Hello FoodFavoritesComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
