import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticlesComponent } from '../pages/articles/articles.component'; 

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = 'http://localhost:8081/Article'; 

  constructor(private http: HttpClient) {}

 
  getAllArticles(): Observable<ArticlesComponent[]> {
    return this.http.get<ArticlesComponent[]>(`${this.baseUrl}`);
  }

 
  createArticle(article: ArticlesComponent): Observable<ArticlesComponent> {
    return this.http.post<ArticlesComponent>(`${this.baseUrl}`, article);
  }

  // Récupérer un article par son ID
  getArticleById(id: number): Observable<ArticlesComponent> {
    return this.http.get<ArticlesComponent>(`${this.baseUrl}/${id}`);
  }

  // Mettre à jour un article
  updateArticle(id: number, article: ArticlesComponent): Observable<ArticlesComponent> {
    return this.http.put<ArticlesComponent>(`${this.baseUrl}/${id}`, article);
  }

  // Supprimer un article
  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Envoyer des emails aux abonnés concernant un article
  sendEmailsToSubscribers(id: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/send-emails/${id}`, {});
  }
}
