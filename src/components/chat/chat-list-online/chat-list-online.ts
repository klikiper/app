import { Component, Input } from '@angular/core';

/**
 * Generated class for the ChatListOnlineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'chat-list-online',
 	templateUrl: 'chat-list-online.html'
 })
 export class ChatListOnlineComponent {
 	@Input() data: any;
 	@Input() events: any;

 	constructor() {
 		console.log('Hello ChatListOnlineComponent Component');
 		
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
