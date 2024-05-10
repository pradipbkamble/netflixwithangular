import { Component, OnInit, inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Imovies } from 'src/app/interface/movisinterface';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-picturs',
  templateUrl: './picturs.component.html',
  styleUrls: ['./picturs.component.scss']
})
export class PictursComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: true
  }
   movieArr :Array<Imovies>=[];
  // movieArr! : any
private _movieservices = inject(MoviesService)

  constructor() { }

  ngOnInit(): void {
  //  this._movieservices.fetchTrendingMovies()
  //  .subscribe((res:any) =>{
  //   console.log(res);
  //   this.movieArr =res
    
  //  })
  this._movieservices.fetchmoviesslider()
  .subscribe(res =>{
    console.log(res);
    this.movieArr =res

})
}


}
