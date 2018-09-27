import { Component, Input } from '@angular/core';

/**
 * Generated class for the BlogBasicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'blog-basic',
 	templateUrl: 'blog-basic.html'
 })
 export class BlogBasicComponent {
 	@Input() data: any;
 	@Input() events: any;

 	constructor() {
 		console.log('Hello BlogBasicComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
