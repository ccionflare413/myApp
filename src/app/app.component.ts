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

  //--

  sqaureHeight = 100;
  squreWidth = 250;

  //--

  appCounter = 25;

  //--

  activate:boolean = false;

  //--

  customterList: string[] = ['customer1','customer2','customer3','customer4']
  pushCustomer(){
    this.customterList.push('customer'+(this.customterList.length+1));
  }

  unshiftCustomer(){
    this.customterList.unshift('customer'+(this.customterList.length+1));
  }

  removeCustomer(index:number){
    this.customterList.splice(index,1)
  }
}
