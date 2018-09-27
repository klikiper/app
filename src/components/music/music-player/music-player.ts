import { Component, Input } from '@angular/core';

/**
 * Generated class for the MusicPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'music-player',
  templateUrl: 'music-player.html'
})
export class MusicPlayerComponent {

  @Input() data: any;
   @Input() events: any;


  constructor() {
    console.log('Hello MusicPlayerComponent Component');
  }

  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
      this.events[event]();
    }
  }

}
