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
    url: string = environment.apiUrl + "api/get_users";

    constructor(private http: HttpClient) { 
    }

    getUsers(){
        return this.http.get<User[]>(this.url);
    };
}
