import { Component, Input } from '@angular/core';

/**
 * Generated class for the ChatConversationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'chat-conversation',
 	templateUrl: 'chat-conversation.html'
 })
 export class ChatConversationComponent {
 	@Input() data: any;
 	@Input() events: any;

 	constructor() {
 		console.log('Hello ChatConversationComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}
 	
 }
