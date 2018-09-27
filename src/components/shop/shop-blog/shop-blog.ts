import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopBlogComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'shop-blog',
 	templateUrl: 'shop-blog.html'
 })
 export class ShopBlogComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor() {
 		console.log('Hello ShopBlogComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
