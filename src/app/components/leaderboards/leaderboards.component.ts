import { Component, Inject } from '@angular/core';
import { LeaderboardsService, User } from './leaderboards.service';

@Component({
    selector: 'leaderboards',
    templateUrl: './leaderboards.component.html',
    styleUrls: ['./leaderboards.component.scss'],
    providers: [LeaderboardsService]
})


export class LeaderboardsComponent{

    public users: User[] = [];

    constructor(private service: LeaderboardsService){
        service.getUsers().subscribe(result=>{
            this.users = result as User[];
        });
    }
}