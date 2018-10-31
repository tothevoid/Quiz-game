import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface User{
    name: String,
    img: String,
    games_count: Number,
    correct_answers: Number
}

@Injectable()
export class LeaderboardsService{
    constructor(private http: HttpClient) { }

    url: string = environment.apiUrl + "api/get_users";

    getUsers(){
        return this.http.get<User[]>(this.url);
    };
}
