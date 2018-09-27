import { Component, Input } from '@angular/core';

/**
 * Generated class for the ChatListUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
  selector: 'chat-list-users',
  templateUrl: 'chat-list-users.html'
})
 export class ChatListUsersComponent {
   @Input() data: any;
   @Input() events: any;

   constructor() {
    console.log('Hello ChatListUsersComponent Component');
  }

  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
      this.events[event]();
    }
  }

}
