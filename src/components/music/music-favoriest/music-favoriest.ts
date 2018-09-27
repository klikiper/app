import { Component, Input } from '@angular/core';

/**
 * Generated class for the MusicFavoriestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'music-favoriest',
 	templateUrl: 'music-favoriest.html'
 })
 export class MusicFavoriestComponent {

 	@Input() data: any;
 	@Input() events: any;


 	constructor() {
 		console.log('Hello MusicFavoriestComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
