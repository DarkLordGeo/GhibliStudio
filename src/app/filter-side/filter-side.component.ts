import { Component, OnInit } from '@angular/core';
import { GhibliService } from '../ghibli.service';
import { SearchService } from '../search-service.service';

@Component({
  selector: 'app-filter-side',
  templateUrl: './filter-side.component.html',
  styleUrls: ['./filter-side.component.css']
})
export class FilterSideComponent implements OnInit {
  authors: any[] = []; 
  selectedAuthor: string = '';  

  yearRanges: any[] = []; 
  selectedYear: string = '';  

  constructor(
    private ghibliService: GhibliService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.ghibliService.getFilms().subscribe(films => {
      this.authors = this.ghibliService.getAuthorsAndFilmCount(films);  
      this.searchService.setAllFilms(films);  
      this.yearRanges = this.searchService.yearRanges; 
    });
  }

  onAuthorChange(): void {
    this.searchService.filterFilmsByAuthor(this.selectedAuthor); 
  }

  resetAuthorSelection(): void {
    this.selectedAuthor = '';
    this.searchService.resetFilter();  
  }

  onYearChange(): void {
    this.searchService.filterFilmsByYear(this.selectedYear);  
  }


  resetSelection(): void {
    this.selectedAuthor = '';  
    this.selectedYear = '';    
    this.searchService.resetFilter(); 
  }
  
   
} 
