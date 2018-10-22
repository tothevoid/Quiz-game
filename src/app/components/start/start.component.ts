import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent implements OnInit {
  ngOnInit() { 
    document.addEventListener("deviceready", function() { 
      alert(device.platform); 
    }, false); 
  } 
  
}


