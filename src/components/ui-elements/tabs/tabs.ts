import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'tabs',
 	templateUrl: 'tabs.html'
 })
 export class TabsComponent {

 	@Input() events: any;
 	@Input() data: any;

 	// tab1Root = HomeBasicComponent;
  // 	tab2Root = HomeBasicComponent;
  // 	tab3Root = HomeBasicComponent;
  // 	tab4Root = HomeBasicComponent;

 	constructor() {
 		console.log('Hello TabsComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	// lorem impsum
 	
 }
