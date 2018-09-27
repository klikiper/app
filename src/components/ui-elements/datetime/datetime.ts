import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'datetime',
 	templateUrl: 'datetime.html'
 })
 export class DateTimeComponent {

 	@Input() events: any;
 	@Input() data: any;

 	public event = {
	    month: '1990-02-19',
	    timeStarts: '07:43',
	    timeEnds: '1990-02-20'
	}

 	constructor() {
 		console.log('Hello DateTimeComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	// lorem impsum

 }
