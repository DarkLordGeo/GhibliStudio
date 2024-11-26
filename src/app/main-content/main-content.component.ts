import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  filteredCards: any[] = [];  

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.filteredFilms$.subscribe(films => {
      this.filteredCards = films;  
      console.log(this.filteredCards); 
    });
  }
}
