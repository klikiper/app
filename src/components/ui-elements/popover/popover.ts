import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @IonicPage()
 @Component({
 	selector: 'popover',
 	templateUrl: 'popover.html'
 })
 export class PopoverComponent {
 	@ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
 	@ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

 	@Input() events: any;
 	@Input() data: any;


 	constructor(private popoverCtrl: PopoverController) {
 		console.log('Hello PopoverComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	presentPopover(ev) {
 		let popover = this.popoverCtrl.create('PopoverMainComponent', {
 			contentEle: this.content.nativeElement,
 			textEle: this.text.nativeElement
 		});

 		popover.present({
 			ev: ev
 		});
 	}

 	// lorem impsum

 }
