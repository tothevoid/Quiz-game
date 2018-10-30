import { Component, OnInit } from '@angular/core';
import { StartService, UserData } from '../start/start.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

declare let device: any;
declare let navigator: any;
declare var Camera: any;
@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  providers: [StartService]
})


export class StartComponent implements OnInit {
  public data: UserData;

  ngOnInit() { 
    
  } 
  
  constructor(private service: StartService, private router: Router, private route:ActivatedRoute) {
    this.data = {
      imagePath: environment.apiUrl + "default.png",
      name: "",
    }
  }

  public success(data){
    this.data.imagePath = "data:image/jpeg;base64," + data; 
  };

  public takePicture(){
    const cameraOptions = {
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 50
    };

    navigator.camera.getPicture(
      (data)=>this.data.imagePath = "data:image/jpeg;base64," + data,
      (err)=>console.log(err),
      cameraOptions
    );
  }

  public onSubmit(){
    if (!this.data.imagePath.startsWith('data:image')){
      this.data.imagePath = "";
    }
    this.service.createUser(this.data).subscribe(item=>{
      var id = item as string;
      console.log(id)
      localStorage.setItem('id',id);
      this.router.navigate(['main-menu'])
  })
  }
}
