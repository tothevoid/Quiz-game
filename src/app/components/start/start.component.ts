import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { UserData } from './start.model'
import { HttpService } from '../../http.service'

declare let navigator: any;
declare var Camera: any;
@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  providers: [HttpService]
})

export class StartComponent{
  public data: UserData;
 
  constructor(private service: HttpService, private router: Router, private route:ActivatedRoute) {
    this.data = {
      imagePath: "assets/avatar.svg",
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
    this.service.post('create_user',this.data).subscribe(response => {
      var id = Object.values(response);
      localStorage.setItem('id', id[0]);
      this.router.navigate(['main-menu'])
    }, error => {
      console.log("connection faild")
      this.router.navigate(['main-menu'])
    })
  }
}
