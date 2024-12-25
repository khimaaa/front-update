import { Component } from '@angular/core';
import { Article } from './article.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
 [x: string]: any;
 sendEmails(arg0: any) {
 throw new Error('Method not implemented.');
 }
   newArticle = {
     title: '',
     content: ''
   };
 
 
   constructor(private articleService: ArticlesComponent) {}
 
 
 
 addArticle(this: any) {
   if (this.newArticle.title.trim() && this.newArticle.content.trim()) {
     this.articleService.createArticle(this.newArticle).subscribe({
       next: (response: any) => {
         console.log('Article créé avec succès :', response);
         alert('Article créé avec succès');
         this.newArticle = { title: '', content: '' }; // Réinitialiser le formulaire
       },
       error: (err: any) => {
         console.error('Erreur lors de la création de l’article :', err);
         alert('Erreur lors de la création de l’article.');
       },
     });
   } else {
     alert('Veuillez remplir tous les champs.');
   }
 
  }
 
 
   articles: Article[] = [];
   Article: ArticlesComponent[] | undefined;
 
 
 
   ngOnInit(): void {
     this.loadArticles();
   }
 
   loadArticles() {
     this.articleService['getAllArticles']().subscribe({
       next: (data: ArticlesComponent[] | undefined) => {
         this.Article = data; // Affecte les articles à la variable
         console.log('Articles récupérés avec succès :', this.articles);
       },
       error: (err: any) => {
         console.error('Erreur lors de la récupération des articles :', err);
       },
     });
 
 
 
 
    }}
