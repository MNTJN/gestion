import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categories.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  componentName: string = "Catégorie";
  categories: any[];

  constructor(private categorieService : CategorieService) {
    
   }

  ngOnInit() {
    this.categories = this.categorieService.categories;
  }

}
