import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../http.service'
import { Category } from './categories.model'
import { categoryData } from '../../offlineData'

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [HttpService]
})


export class CategoriesComponent implements OnInit {
  Categories: Category[] = [];
  ImgUrl: String = environment.apiUrl+'categories/'

  constructor(private service: HttpService) 
  {
    this.ImgUrl = 'assets/categories/'
  }

  ngOnInit() { 
      this.service.getAll<Category>('get_categories').subscribe(categories=>{
        console.log('online categories')
        this.Categories = categories as Category[]
      }, error => {    
      console.log('offline categories')
      this.Categories = categoryData
    })
  };
  
}


