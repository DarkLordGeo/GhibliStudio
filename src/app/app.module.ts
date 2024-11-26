import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { FilterSideComponent } from './filter-side/filter-side.component';
import { MainContentComponent } from './main-content/main-content.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    FilterSideComponent,
    MainContentComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
