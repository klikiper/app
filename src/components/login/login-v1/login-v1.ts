import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the LoginV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

 @IonicPage()
 @Component({
  selector: 'login-v1',
  templateUrl: 'login-v1.html'
})
 export class LoginV1Component {
  @Input() data: any;
  @Input() events: any;

  public username: string;
  public password: string;

  constructor() {}

  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
      this.events[event]({
        'username' : this.username,
        'password' : this.password
      });
    }
  }


}
