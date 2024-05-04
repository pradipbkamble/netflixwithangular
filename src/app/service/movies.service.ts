import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovies, ImoviesRes } from '../interface/movisinterface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviurl=`${environment.baseurl}`
  key=`${environment.apikey}`
trimovisUrl:string=`${this.moviurl}/trending/all/week?api_key=${this.key}`
private _http=inject(HttpClient)
  constructor() { }

fetchmoviesslider():Observable<Imovies[]>{
return this._http.get<ImoviesRes>(this.trimovisUrl)
.pipe(
  map(res=>res.results)
)
 }

 fetchsinglemovi(ids:string){
  let singlemoviurl=`${this.moviurl}/movie/${ids}?api_key=${this.key}`
  return this._http.get<any>(singlemoviurl)
 }
}
