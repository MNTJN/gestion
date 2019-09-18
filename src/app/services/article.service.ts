import { OnInit } from '@angular/core';

export class ArticleService implements OnInit{
	articles: any[];

	constructor(){
		this.articles = [
			{
			  "id": 1,
			  "libelle": "maillot",
			  "categorie": "Sport",
			  "prix": 14.90
			},
			{
			  "id": 2,
			  "libelle": "arrosoir",
			  "categorie": "Jardin",
			  "prix": 29.99
			},
			{
			  "id": 3,
			  "libelle": "tapis",
			  "categorie": "Décoration",
			  "prix": 139.99
			}
		  ];
	}

	ngOnInit(){}

	getArticles(){ return this.articles; }
	
	getArticleCategorie(id: number){
		for(let article of this.articles){
			if(article.id === id)
			{
				return article.categorie;
			}
		}
		return "Aucun article ne correspond à cet id";
	}


}