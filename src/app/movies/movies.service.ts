import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IMovie, Movie } from './movies.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesService {
  private cache: Map<string, Promise<Movie>> = new Map<string, Promise<Movie>>();

  constructor(private http: HttpClient) { }

  getAll(): Promise<IMovie[]>{
    return new Promise<IMovie[]>((resolve, reject) => {
      this.http.get(environment.endpoint + '/films/', { observe: 'response' })
        .subscribe(res => {
          let results = <IMovie[]>res.body['results'];
          resolve(results);
        }, err => {
          reject(err.error.message);
        });
    });
  }

 
  }

 
