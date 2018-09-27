import { Component,Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the LoginV5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'login-v5',
  templateUrl: 'login-v5.html'
})
export class LoginV5Component {
  @Input() data:any;
  @Input() events:any;
  public username;
  public password;

  constructor() {
  }

  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]({
            'username' : this.username,
            'password' : this.password
        });
    }
  }

}
