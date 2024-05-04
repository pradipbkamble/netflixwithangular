import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { Observable } from 'rxjs';
import { Imovies, ImoviesRes } from 'src/app/interface/movisinterface';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.scss']
})
export class MainsliderComponent implements OnInit {
moviobj$!:Observable<any>
moviobj!:any
  constructor(private _moviser:MoviesService) { }

  ngOnInit(): void {
    this._moviser.fetchmoviesslider().subscribe(res=>{
      console.log(res);
      this.moviobj=res
      
    })
    // this.moviobj$=this._moviser.fetchmoviesslider()

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
   nav:true
}
}



