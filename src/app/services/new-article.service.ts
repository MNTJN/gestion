import { OnInit, Injectable } from '@angular/core';
import { CategorieService } from './categories.service';

@Injectable()
export class NewArticleService implements OnInit{

	constructor(private categorieService : CategorieService){}

	ngOnInit(){
		
	}

	getCategories(){ return this.categorieService.getCategories(); }
}