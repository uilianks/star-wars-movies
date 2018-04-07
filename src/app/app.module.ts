import { ROUTES } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LeftSideMenuComponent,
    MenuTopComponent,
    MoviesComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
