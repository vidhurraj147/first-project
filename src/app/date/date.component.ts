import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  // message: string = new Date().toDateString(); 
  dateMessage: string;
  someDate: string;
  someNumber: number = 10;
  

  constructor() { 
    setInterval(() =>{
    let currentDate = new Date();
    this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();    
  },1000);


  }

  // someDate = new Date();

  // demoDate(){
  //   this.someDate = new Date().toDateString();
  // }

  ngOnInit() {
    
  }

  addTwoNumbers(a: number,b: number){
    return a + b;
  }

  someOtherNumber(){
    return this.addTwoNumbers(this.someNumber,231)
  }

}
