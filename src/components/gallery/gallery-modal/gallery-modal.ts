import { Component, Input} from '@angular/core';

/**
 * Generated class for the GalleryModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gallery-modal',
  templateUrl: 'gallery-modal.html'
})
export class GalleryModalComponent {
  @Input() data: any;
  @Input() events: any;

  constructor() {
    
  }


  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]();
    }
  }


}
