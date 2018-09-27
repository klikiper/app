import { Component,Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the LoginV6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'login-v6',
  templateUrl: 'login-v6.html'
})
export class LoginV6Component {
  @Input() data:any;
  @Input() events:any;
  public email;
  public password;
  public signUpEmail;
  public signUpPassword;
  public confirmPassword;

  type: any="signup";

  constructor() {
  }

  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]({
            'email' : this.email,
            'password' : this.password,
            'signUpEmail':this.signUpEmail,
            'signUpPassword':this.signUpPassword,
            'confirmPassword':this.confirmPassword
        });
    }
  }

}
