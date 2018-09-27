import { Component, Input } from '@angular/core';

/**
 * Generated class for the MusicHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'music-home',
 	templateUrl: 'music-home.html'
 })
 export class MusicHomeComponent {

 	@Input() data: any;
 	@Input() events: any;

 	section: any="popular";


 	constructor() {
 		console.log('Hello MusicHomeComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
