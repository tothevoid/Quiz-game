import { Injectable } from '@angular/core' 
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

export interface Category {
    name: string;
    img: string;
}
  
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    getByPk<T>(method: string, pk: string){
        var params = new HttpParams().append('pk', pk)

        return this.http.get<T>(environment.apiUrl+'api/'+method+'/'+pk);
    }

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