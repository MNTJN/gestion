import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleComponent } from './article/article.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ArticleService } from './services/article.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CategorieService } from './services/categories.service';
import { NewArticleComponent } from './new-article/new-article.component';
import { NewCategorieComponent } from './new-categorie/new-categorie.component';
import { NewArticleService } from './services/new-article.service';

const appRoutes: Routes = [
  {path: 'articles', component: ArticleComponent},
  {path: 'categories', component: CategorieComponent},
  {path: 'new-article', component: NewArticleComponent},
  {path: 'new-categorie', component: NewCategorieComponent},
  {path: '', component: ArticleComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleComponent,
    CategorieComponent,
    FourOhFourComponent,
    NewArticleComponent,
    NewCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService, CategorieService, NewArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
