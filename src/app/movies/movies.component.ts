import { environment } from './../../environments/environment';
import { MoviesService } from './movies.service';
import { Component, OnInit } from '@angular/core';
import { IMovie, Movie } from './movies.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  imagens = [
    {url:'https://images-na.ssl-images-amazon.com/images/I/91GAgvnO3AL._RI_.jpg'}];
    private cache: Map<number, Promise<Movie>> = new Map<number, Promise<Movie>>();


  constructor(private movieService: MoviesService, private http: HttpClient) { }


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
  getById(title: number): Promise<Movie> {
    return new Promise<Movie>((resolve, reject) => {
        if (this.cache.has(title))
            return resolve(this.cache.get(title));
        this.http.get(environment.endpoint + `/films/${title}`, { observe: 'response' })
            .subscribe(res => {
                const post = <Movie>res.body['results'];
            }, err => {
                reject(err.error.message);
            })
    })
}

}
