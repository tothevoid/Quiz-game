import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
export interface Category {
    name: string;
    img: string;
  }
  
@Injectable()
export class CategoriesService {
    constructor(private http: HttpClient) { }

    url: string = environment.apiUrl + "get_categories/";

    getAllCategories(){
        return this.http.get<Category[]>(this.url);
    };

}