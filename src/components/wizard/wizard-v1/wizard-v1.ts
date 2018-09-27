import { Component } from '@angular/core';

/**
 * Generated class for the WizardV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wizard-v1',
  templateUrl: 'wizard-v1.html'
})
export class WizardV1Component {

  text: string;

  constructor() {
    console.log('Hello WizardV1Component Component');
    this.text = 'Hello World';
  }

}
