import { Component,Input } from '@angular/core';

/**
 * Generated class for the InfoGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'horizontal-gallery',
 	templateUrl: 'horizontal-gallery.html'
 })
 export class HorizontalGalleryComponent {
 	@Input() data: any;
    @Input() events: any;
 	constructor() {
 		
 	}

 	onCallbackEvent = (event: string, item, e): void => {
 		if (e){
 			e.stopPropagation();
 		}
 		if (this.events[event]) {
 			this.events[event](item);
 		}
 	}
 }
