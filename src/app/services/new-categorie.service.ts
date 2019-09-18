import { OnInit, Injectable } from '@angular/core';
import { CategorieService } from './categories.service';

@Injectable()
export class NewCategorieService implements OnInit{

	categories: any[];
	
	constructor(private categorieService : CategorieService){}
	ngOnInit(){
		
	}

	addCategorie(){
		this.categories = this.categorieService.getCategories();
	}
}