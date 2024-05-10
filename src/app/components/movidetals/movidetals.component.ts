import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imovies } from 'src/app/interface/movisinterface';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movidetals',
  templateUrl: './movidetals.component.html',
  styleUrls: ['./movidetals.component.scss']
})
export class MovidetalsComponent implements OnInit {
  moviesid!:string
  movieObj!:any
  backgroundimg!:any
  constructor(private _moviser:MoviesService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
this.moviesid=this._route.snapshot.params['moviId']
console.log(this.moviesid);

this._moviser.fetchsinglemovi(this.moviesid).subscribe(res=>{
  this.movieObj=res
  console.log(this.movieObj);
  // this.backgroundimg='https://image.tmdb.org/t/p/original/'+this.moviobj?.backdrop_path||this.moviobj.poster_path
  
})
  }

}
