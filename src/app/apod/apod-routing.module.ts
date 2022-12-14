import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeApodComponent } from './pages/home-apod/home-apod.component';

import { PictRandomComponent } from './pages/pict-random/pict-random.component';
import { PictSelectedComponent } from './pages/pict-selected/pict-selected.component';
import { PicDateComponent } from './pages/pic-date/pic-date.component';
import { PicDayComponent } from './pages/pic-day/pic-day.component';
import { JupiterComponent } from './pages/jupiter/jupiter.component';

const routes:Routes = [
  {
    path:'',
    children:[
      { path:'homeApod', component:HomeApodComponent },
      { path:'day', component:PicDayComponent},
      { path:'random', component:PictRandomComponent},
      { path:'selected', component:PictSelectedComponent},
      { path:'date', component:PicDateComponent},
      { path:'jupiter', component:JupiterComponent},
      { path:'**', component:HomeApodComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ApodRoutingModule { }
