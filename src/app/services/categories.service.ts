import { OnInit } from '@angular/core';

export class CategorieService implements OnInit{
	categories: any[];

	constructor(){
		this.categories = [
			{
				"id": 1,
				"libelle": "Sport"
			},
			{
				"id": 2,
				"libelle": "Jardin"
			},
			{
				"id": 3,
				"libelle": "Décoration"
			}
		];
	}

	ngOnInit(){}

	getCategories(){ return this.categories; }
}