import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeApodComponent } from './apod/pages/home-apod/home-apod.component';

const routes:Routes = [
  {
    path:'apod',
    loadChildren:()=>import('./apod/apod.module').then(m=>m.ApodModule)
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'404',
    component:ErrorPageComponent
  }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
