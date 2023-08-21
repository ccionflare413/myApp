import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar-guy',
  templateUrl: './action-bar-guy.component.html',
  styleUrls: ['./action-bar-guy.component.css']
})
export class ActionBarGuyComponent {
  counter:number = 0;
  @Input() step:number = 1;
  @Output() numChange = new EventEmitter();
  decrease(){
    if(this.counter-this.step>=0){
      this.counter-=this.step;
      this.numChange.emit(this.counter);
    }
  }
  increase(){
    if(this.counter+this.step<=10){
      this.counter+=this.step;
      this.numChange.emit(this.counter);
    }
  }
}
