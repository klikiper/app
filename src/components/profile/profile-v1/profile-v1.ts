import { Component,Input } from '@angular/core';

/**
 * Generated class for the ProfileV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-v1',
  templateUrl: 'profile-v1.html'
})
export class ProfileV1Component {

  @Input() data: any;
   @Input() events: any;

  constructor() {

  }

  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
      this.events[event]();
    }
  }
  
}
