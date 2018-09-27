import { Component } from '@angular/core';

/**
 * Generated class for the WizardV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wizard-v3',
  templateUrl: 'wizard-v3.html'
})
export class WizardV3Component {

  text: string;

  constructor() {
    console.log('Hello WizardV3Component Component');
    this.text = 'Hello World';
  }

}
