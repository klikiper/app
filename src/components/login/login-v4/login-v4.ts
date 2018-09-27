import { Component, Input} from '@angular/core';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the LoginV4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'login-v4',
  templateUrl: 'login-v4.html'
})
export class LoginV4Component {
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
