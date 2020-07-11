import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  constructor() { }

    public isImportant:boolean=false;
    public statusColor = 'red';
    public moreStyles = {
    color:'yellow',
    backgroundColor:'darkblue',
    padding:'5px',
    marginLeft:'100px'    
  }
  
  ngOnInit(): void {
  }

}
