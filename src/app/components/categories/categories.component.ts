import { Component, OnInit, Inject } from '@angular/core';
import {CategoriesService, Category} from './categories.service'
import { environment } from 'src/environments/environment';

declare var device;

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService]
})

export class CategoriesComponent implements OnInit {
  title = 'Категории';
  public BaseUrl: string;
  public Categories: Category[] = [];
  public Service: CategoriesService;
  public url: String

  constructor(private service: CategoriesService) {
    this.Service = service
    this.url = environment.apiUrl+'categories/'
  }

  ngOnInit() { 
    this.Service.getAllCategories().subscribe(categories=>{
      this.Categories = categories as Category[];     
    })
  };
  
}


