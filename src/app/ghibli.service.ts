import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../app/author'; 

@Injectable({
  providedIn: 'root'
})
export class GhibliService {

  private apiUrl = 'https://ghibliapi.vercel.app/films'; 

  constructor(private http: HttpClient) {}

  getFilms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); 
  }

  getAuthorsAndFilmCount(films: any[]): Author[] {
    const authors: Author[] = []; 

    films.forEach((film: any) => {
      const director = film.director;

      const existingAuthor = authors.find(author => author.name === director);
      if (existingAuthor) {
        existingAuthor.productCount++;
      } else {
        authors.push({ name: director, productCount: 1 }); 
      }
    });
    return authors;
  }
}
