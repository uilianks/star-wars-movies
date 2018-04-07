import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movies.model';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movies: IMovie[] = [];
  imagens = [
    {url:'https://images-na.ssl-images-amazon.com/images/I/91GAgvnO3AL._RI_.jpg'}];
    constructor(private movieService: MoviesService) { }

    ngOnInit() {
      this.getTags();
    }
  
    async getTags() {
      try {
        this.movies = (await this.movieService.getAll()); //.concat(this.arrayTag);
        return this.movies
      }catch (e){
        console.log(e);
      }
    }
  
  }
