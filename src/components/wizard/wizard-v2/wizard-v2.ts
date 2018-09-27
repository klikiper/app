import { Component } from '@angular/core';

/**
 * Generated class for the WizardV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wizard-v2',
  templateUrl: 'wizard-v2.html'
})
export class WizardV2Component {

  text: string;

  constructor() {
    console.log('Hello WizardV2Component Component');
    this.text = 'Hello World';
  }

}
