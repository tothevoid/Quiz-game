import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';

export interface Category {
    name: string;
    img: string;
  }
  
@Injectable()
export class CategoriesService {
    constructor(private http: HttpClient) { }

    url: string = "http://192.168.100.8:8000/api/get_categories";

    getAllCategories(){
        return this.http.get<Category[]>(this.url);
    };

}