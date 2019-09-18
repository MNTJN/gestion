import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { CategorieService } from '../services/categories.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  componentName: string = "Article";
  articles: any[];
  categories: any[];

  constructor(private articleService : ArticleService, private categorieService : CategorieService) {
    
   }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.categories = this.categorieService.getCategories();
  }

  getArticleCategorie(id: number){ return this.articleService.getArticleCategorie(id); }

}
