import { Component, Input } from '@angular/core';

/**
 * Generated class for the ComingSoonV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
   selector: 'coming-soon-v1',
   templateUrl: 'coming-soon-v1.html'
 })
 export class ComingSoonV1Component {
  @Input() data: any;
  @Input() events: any;
 
  running: any = false;
  timer: any = null;
  val_days: number;
  val_hours: number;
  val_minutes: number;
  val_seconds: number;

  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  constructor() {
    this.val_days = 3;
    this.val_hours = 17;
    this.val_minutes = 33;
    this.val_seconds = 25;

    this.days = ('0' + this.val_days).slice(-2);
    this.hours = ('0' + this.val_hours).slice(-2);
    this.minutes = ('0' + this.val_minutes).slice(-2);
    this.seconds = ('0' + this.val_seconds).slice(-2);
    //Use setTimeout to wait for time to load from the server
    this.count_down();
  }


  onCallbackEvent = (event: string): void => {
    if (this.events[event]) {
      this.events[event]();
    }
  }


  count_down(){
   console.log("a");
   this.running = true;
   let thiss = this;
   this.timer = setInterval(function(){
     if(thiss.val_seconds > 0){
       thiss.val_seconds = thiss.val_seconds - 1;
     }
     if(thiss.val_seconds == 0 && thiss.val_minutes > 0){
       thiss.val_minutes = thiss.val_minutes - 1;
       thiss.val_seconds = 59;
     }
     if(thiss.val_minutes == 0 && thiss.val_seconds == 0 && thiss.val_hours > 0){
       thiss.val_hours = thiss.val_hours - 1;
       thiss.val_minutes = 59;
       thiss.val_seconds = 59;
     }
     if(thiss.val_hours == 0 && thiss.val_minutes == 0 && thiss.val_seconds == 0 && thiss.val_days > 0){
       thiss.val_days = thiss.val_days - 1;
       thiss.val_hours = 24;
       thiss.val_minutes = 59;
       thiss.val_seconds = 59;
     }
     thiss.days = ('0' + thiss.val_days).slice(-2);
     thiss.hours = ('0' + thiss.val_hours).slice(-2);
     thiss.minutes = ('0' + thiss.val_minutes).slice(-2);
     thiss.seconds = ('0' + thiss.val_seconds).slice(-2);
   }, 1000);
 }


 // play(){
 //   if(this.running == true){
 //     clearInterval(this.timer);
 //     this.running = false;
 //   }else{
 //     this.count_down();
 //   }
 // }


 // restart(){
 //  clearInterval(this.timer);
 //  this.running = false;
 //  this.constructor();
 // }

}
