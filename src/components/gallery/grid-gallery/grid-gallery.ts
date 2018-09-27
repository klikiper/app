import { Component, Input } from '@angular/core';

/**
 * Generated class for the GridGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'grid-gallery',
  templateUrl: 'grid-gallery.html'
})
export class GridGalleryComponent {
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
