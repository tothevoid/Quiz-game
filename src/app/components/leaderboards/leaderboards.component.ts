import { Component, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './leaderboards.model'
import { HttpService } from '../../http.service'

@Component({
    selector: 'leaderboards',
    templateUrl: './leaderboards.component.html',
    styleUrls: ['./leaderboards.component.scss'],
    providers: [HttpService]
})


export class LeaderboardsComponent{
    users: User[] = [];
    imagesUrl: string = environment.apiUrl + 'avatars/'

    constructor(private service: HttpService){
        service.getAll<User>('get_users').subscribe(result=>{
            this.users = result as User[];
        });
    }
}