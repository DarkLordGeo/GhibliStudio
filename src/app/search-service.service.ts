import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private allFilms: any[] = [];  
  private filteredFilmsSubject = new BehaviorSubject<any[]>([]);  
  filteredFilms$ = this.filteredFilmsSubject.asObservable();

  yearRanges: any[] = [];  

  constructor() {}

  setAllFilms(films: any[]): void {
    this.allFilms = films;
    this.filteredFilmsSubject.next(films);  
    this.getYearRanges(films); 
  }

  filterFilmsByAuthor(author: string): void {
    if (author) {
      const filteredFilms = this.allFilms.filter(film => film.director === author);
      this.filteredFilmsSubject.next(filteredFilms);
    } else {
      this.filteredFilmsSubject.next(this.allFilms);
    }
  }

  filterFilmsByKeyword(keyword: string): void {
    if (keyword.trim()) {
      const filteredFilms = this.allFilms.filter(film => 
        film.title.toLowerCase().includes(keyword.toLowerCase()) || 
        film.director.toLowerCase().includes(keyword.toLowerCase())
      );
      this.filteredFilmsSubject.next(filteredFilms);
    } else {
      this.filteredFilmsSubject.next(this.allFilms);
    }
  }

  resetFilter(): void {
    this.filteredFilmsSubject.next(this.allFilms);
  }

  getYearRanges(films: any[]): void {
    const yearRanges = [
      { range: '1980-1990', years: [1980, 1990] },
      { range: '1991-2000', years: [1991, 2000] },
      { range: '2001-2010', years: [2001, 2010] },
      { range: '2011-2020', years: [2011, 2020] },
      { range: '2021-present', years: [2021, new Date().getFullYear()] }
    ];

    this.yearRanges = yearRanges.map(range => {
      const count = films.filter(film => {
        const releaseYear = new Date(film.release_date).getFullYear();
        return releaseYear >= range.years[0] && releaseYear <= range.years[1];
      }).length;
      return { ...range, count };
    });
  }

  filterFilmsByYear(yearRange: string): void {
    const range = this.yearRanges.find(r => r.range === yearRange);
    if (range) {
      const filteredFilms = this.allFilms.filter(film => {
        const releaseYear = new Date(film.release_date).getFullYear();
        return releaseYear >= range.years[0] && releaseYear <= range.years[1];
      });
      this.filteredFilmsSubject.next(filteredFilms);
    } else {
      this.filteredFilmsSubject.next(this.allFilms);
    }
  }
}
