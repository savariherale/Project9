import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }
  
  username:string = "Shrenik";
  hostaddress:string = window.location.href;

  ngOnInit(): void {
  }

}
