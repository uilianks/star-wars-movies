import { Routes } from '@angular/router'
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';

export const ROUTES: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'teste/:title', component: MoviesDetailComponent },

];