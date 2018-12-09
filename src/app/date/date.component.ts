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
  

  constructor() { 
    this.dateMessage = new Date().toDateString();
  }

  ngOnInit() {
  }

}
