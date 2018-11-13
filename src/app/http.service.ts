import { Injectable } from '@angular/core' 
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export interface Category {
    name: string;
    img: string;
}
  
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    getAll<T>(method: string){
        return this.http.get<T[]>(environment.apiUrl+'api/'+method);
    }

    getByParam<T>(method: string, param: string){
        return this.http.get<T[]>(environment.apiUrl+'api/'+method+'/'+param);
    }

    post<T>(method: string, data: object){
        return this.http.post<T>(environment.apiUrl+'api/'+method, data);
    }
}