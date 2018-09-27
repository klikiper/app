import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopBlogComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'food-blog',
 	templateUrl: 'food-blog.html'
 })
 export class FoodBlogComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor() {
 		console.log('Hello FoodBlogComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
