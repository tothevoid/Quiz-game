import { Component, OnInit } from '@angular/core';
declare let device: any;
declare let navigator: any;
declare var Camera: any;
@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent implements OnInit {
  public imagePath : String = "https://www.w3schools.com/howto/img_avatar.png";



  ngOnInit() { 
    
  } 
  
  public success(data){
    this.imagePath = "data:image/jpeg;base64," + data;
  };

  public takePicture(){
    const cameraOptions = {
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 50
    };

    navigator.camera.getPicture(
      (data)=>this.imagePath = "data:image/jpeg;base64," + data,
      (err)=>console.log(err),
      cameraOptions
    );
  }
}
