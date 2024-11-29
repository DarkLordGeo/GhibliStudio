import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GhibliService } from '../ghibli.service'; 
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any; 
  movieId: string = ''; 

  constructor(
    private route: ActivatedRoute, 
    private ghibliService: GhibliService, 
    private location: Location 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id']; 
      this.fetchMovieDetails(this.movieId); 
    });
  }

  fetchMovieDetails(movieId: string): void {
    this.ghibliService.getFilmById(movieId).subscribe(
      (movieData) => {
        this.movie = movieData;
      },
      (error) => {
        console.error('Error fetching movie details:', error); 
      }
    );
  }

  goBack(): void {
    this.location.back(); 
  }
}
