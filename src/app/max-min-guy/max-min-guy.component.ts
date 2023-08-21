import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-max-min-guy',
  templateUrl: './max-min-guy.component.html',
  styleUrls: ['./max-min-guy.component.css']
})
export class MaxMinGuyComponent {
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  dMinChange(value:number){
    this.minChange.emit(value);
  }

  dMaxChange(value:number){
    this.maxChange.emit(value);
  }
}
