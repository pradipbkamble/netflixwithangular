import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MainsliderComponent } from './components/mainslider/mainslider.component';
import { MovidetalsComponent } from './components/movidetals/movidetals.component';


import {HttpClientModule}  from '@angular/common/http'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { movimodule } from './movimodule/movimodule.module';
import { PictursComponent } from './components/picturs/picturs.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainsliderComponent,
    MovidetalsComponent,
    PictursComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    movimodule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
