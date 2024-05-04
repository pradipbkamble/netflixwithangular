import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



let movimod=[MatToolbarModule,MatSidenavModule,MatListModule,MatIconModule,MatButtonModule]

@NgModule({
    declarations:[],
    imports:[
...movimod

    ],
    providers:[
       
    ],
    exports:[
        ...movimod
    ]
})

export class movimodule{

}