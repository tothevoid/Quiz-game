import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animation } from '@angular/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { slideInAnimation } from '../../animation';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]  
})

export class AppComponent implements OnInit {
  ngOnInit() { 
    document.addEventListener("deviceready", function() { 
      console.log('loaded')
      console.log(device.platform); 
    }, false); 
  } 
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}



