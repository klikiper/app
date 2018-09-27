import { Component, Input } from '@angular/core';

/**
 * Generated class for the MagazineBookmarkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'magazine-bookmark',
 	templateUrl: 'magazine-bookmark.html'
 })
 export class MagazineBookmarkComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor() {
 		console.log('Hello MagazineBookmarkComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
