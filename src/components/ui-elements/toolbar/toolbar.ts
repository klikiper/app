import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'toolbar',
 	templateUrl: 'toolbar.html'
 })
 export class ToolbarComponent {

 	@Input() events: any;
 	@Input() data: any;
 	items: Array<any>;
 	
 	constructor() {
 		console.log('Hello ToolbarComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}


 	initializeItems() {
 		this.items = [
 		'Amsterdam',
 		'Bogota',
 		'Buenos Aires',
 		'Cairo',
 		'Dhaka',
 		'Edinburgh',
 		'Geneva',
 		'Genoa',
 		'Glasglow',
 		'Hanoi',
 		'Hong Kong',
 		'Islamabad',
 		'Istanbul',
 		'Jakarta',
 		'Kiel',
 		'Kyoto',
 		'Le Havre',
 		'Lebanon',
 		'Lhasa',
 		'Lima',
 		'London',
 		'Los Angeles',
 		'Madrid',
 		'Manila',
 		'New York',
 		'Olympia',
 		'Oslo',
 		'Panama City',
 		'Peking',
 		'Philadelphia',
 		'San Francisco',
 		'Seoul',
 		'Taipeh',
 		'Tel Aviv',
 		'Tokio',
 		'Uelzen',
 		'Washington'
 		];
 	}


 	getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
        	this.items = this.items.filter((item) => {
        		return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        	})
        }
    }
    
    // lorem impsum

}
