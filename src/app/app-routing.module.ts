import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovidetalsComponent } from './components/movidetals/movidetals.component';
import { PictursComponent } from './components/picturs/picturs.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"movies/:moviId",
    component:MovidetalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
