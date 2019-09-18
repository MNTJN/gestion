import { Component, OnInit } from '@angular/core';
import { NewArticleService } from '../services/new-article.service';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../services/categories.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  categories: any[];
  articles: any[];

  constructor(private newArticleService : NewArticleService, private articleService : ArticleService) {}

  ngOnInit() {
    this.categories = this.newArticleService.getCategories();
  }

  onSubmit(f: NgForm){
    console.log(f.value);
  }
}
