import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar-guy',
  templateUrl: './action-bar-guy.component.html',
  styleUrls: ['./action-bar-guy.component.css']
})
export class ActionBarGuyComponent {
  @Input() counter:number = 0;
  @Input() step:number = 1;
  @Input() inputDisplay = true;
  @Output() counterChange = new EventEmitter();
  decrease(){
    if(this.counter-this.step>=0){
      this.counter-=this.step;
      this.counterChange.emit(this.counter);
    }
  }
  increase(){
    if(this.counter+this.step<=100){
      this.counter+=this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
