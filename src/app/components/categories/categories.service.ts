import {Injectable} from '@angular/core' 
import { HttpClient } from '@angular/common/http';

export interface Category {
    name: string;
    href: string;
  }
  
@Injectable()
export class CategoriesService {
    constructor(private http: HttpClient) { }

    url: string = "http://localhost:8000/api/get_categories";

    getAllCategories(){
        return this.http.get<Category[]>(this.url);
    };

}