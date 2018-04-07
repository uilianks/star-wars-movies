import { IMovie } from './../movies/movies.model';
import { MoviesService } from './../movies/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.css']
})
export class LeftSideMenuComponent implements OnInit {
  movies: IMovie[] = [];
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
