import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../../http.service'
import { User } from '../leaderboards/leaderboards.model';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [HttpService]
})

export class ResultComponent implements OnInit {

  constructor(private service: HttpService) 
  {  }

    public result: String

  ngOnInit() { 
    this.result = sessionStorage.getItem('result')
    var id = localStorage.getItem('id');
    console.log("это "+id)
    this.service.getByPk<User>('get_stat_by_id',id).subscribe(user => {
      console.log(user)
      console.log(this.result)
      var i = 1;

      user.games_count = (user.games_count as number) + 1;
      user.correct_answers = (user.correct_answers as number) + Number(this.result[0]);
      console.log(user)
      this.service.post('send_stats',user).subscribe(res => {
        console.log('send user data success')
    }, error => {
        console.log('fail send user data')
    });
      
    }, error => {
      console.log('Error get user')
    })
  };

   

}