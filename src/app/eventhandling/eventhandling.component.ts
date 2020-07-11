import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventhandling',
  templateUrl: './eventhandling.component.html',
  styleUrls: ['./eventhandling.component.css']
})
export class EventhandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    console.log("Button Click Successfull");
  }

  clickMe(event)
  {
    console.log(event);
    console.log("You Clicked Button " + event.target.value);
  }

}
