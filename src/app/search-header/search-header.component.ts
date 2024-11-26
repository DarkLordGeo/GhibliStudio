import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service.service';  

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {
  searchTerm: string = '';   
  isFocused: boolean = false;  

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}
  onSearch(): void {
    this.searchService.filterFilmsByKeyword(this.searchTerm);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}
