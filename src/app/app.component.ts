import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  appMinLabel = 'myAppMinLabel'
  appMaxLabel = 'myAppMaxLabel'
  FnNumChange(value:number){
    console.log("test number change is ",value)
  }
  
  dAppMaxChange(value:number){
    console.log("max change : ",value)
  }

  dAppMinChange(value:number){
    console.log("min change : ",value)
  }
}
