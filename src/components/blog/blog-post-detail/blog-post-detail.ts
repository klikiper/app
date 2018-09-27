import { Component, Input } from '@angular/core';

/**
 * Generated class for the BlogPostDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'blog-post-detail',
 	templateUrl: 'blog-post-detail.html'
 })
 export class BlogPostDetailComponent {
 	@Input() data: any;
 	@Input() events: any;

 	constructor() {
 		console.log('Hello BlogPostDetailComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
