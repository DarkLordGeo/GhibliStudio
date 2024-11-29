import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { FilterSideComponent } from './filter-side/filter-side.component';
import { MainContentComponent } from './main-content/main-content.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainContentComponent }, 
  { path: 'movie/:id', component: MovieDetailComponent },  
];

@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    FilterSideComponent,
    MainContentComponent,
    MovieDetailsComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
