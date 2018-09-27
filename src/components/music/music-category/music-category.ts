import { Component, Input } from '@angular/core';

/**
 * Generated class for the MusicCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'music-category',
 	templateUrl: 'music-category.html'
 })
 export class MusicCategoryComponent {

 	@Input() data: any;
 	@Input() events: any;

 	constructor() {
 		console.log('Hello MusicCategoryComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
