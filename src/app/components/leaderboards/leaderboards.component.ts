import { Component, Inject } from '@angular/core';
import { LeaderboardsService, User } from './leaderboards.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'leaderboards',
    templateUrl: './leaderboards.component.html',
    styleUrls: ['./leaderboards.component.scss'],
    providers: [LeaderboardsService]
})


export class LeaderboardsComponent{

    public users: User[] = [];

    imagesUrl: string = environment.apiUrl + 'avatars/'

    constructor(private service: LeaderboardsService){
        service.getUsers().subscribe(result=>{
            this.users = result as User[];
        });
    }
}