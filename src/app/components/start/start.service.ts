import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface UserData {
    imagePath : String
    name: String
}

@Injectable()
export class StartService{
    constructor(private http: HttpClient) { }

    url: string = environment.apiUrl + "api/create_user/";

    createUser(data: UserData){
        console.log(data);
        return this.http.post<String>(this.url, data);
    };


}