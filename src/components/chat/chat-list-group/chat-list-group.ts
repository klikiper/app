import { Component, Input } from '@angular/core';

/**
 * Generated class for the ChatListGroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'chat-list-group',
 	templateUrl: 'chat-list-group.html'
 })
 export class ChatListGroupComponent {
 	@Input() data: any;
 	@Input() events: any;

 	constructor() {
 		console.log('Hello ChatListGroupsComponent Component'); 		
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
