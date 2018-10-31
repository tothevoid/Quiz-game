import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {

    public result: String

    ngOnInit() { 
      this.result = sessionStorage.getItem('result')
    };

   

}