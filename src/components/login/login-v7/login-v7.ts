import { Component,Input,ViewChild} from '@angular/core';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the LoginV7Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'login-v7',
  templateUrl: 'login-v7.html'
})
export class LoginV7Component {
  @Input() data:any;
  @Input() events:any;
  public email;
  public password;
  @ViewChild('signupSlider') signupSlider: any;

  constructor() {

  }


  next(){
    this.signupSlider.slideNext();
  }

  prev(){
    this.signupSlider.slidePrev();
  }

  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]({
            'email' : this.email,
            'password' : this.password
        });
    }
  }

}
