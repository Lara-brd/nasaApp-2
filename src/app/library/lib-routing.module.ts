import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLibraryComponent } from './home-library/home-library.component';


const routes:Routes =[
  {
    path:'',
    component:HomeLibraryComponent,
    children:[
      { path:'homeLib', component:HomeLibraryComponent },
      { path:'**', component:HomeLibraryComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LibRoutingModule { }
