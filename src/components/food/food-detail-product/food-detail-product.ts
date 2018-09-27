import { Component, Input, ViewChild } from '@angular/core';

/**
 * Generated class for the ShopDetailProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'food-detail-product',
 	templateUrl: 'food-detail-product.html'
 })
 export class FoodDetailProductComponent {

 	@Input() events: any;
 	@Input() data: any;
 	@ViewChild('slide3') slide3: any;

 	constructor() {
 		console.log('Hello FoodDetailProductComponent Component');    
 	}


 	slide_next(){
 		this.slide3.slideNext();
 	}

 	slide_prev(){
 		this.slide3.slidePrev();
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
