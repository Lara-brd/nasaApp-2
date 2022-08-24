import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeApodComponent } from './pages/home-apod/home-apod.component';
import { PictRandomComponent } from './pages/pict-random/pict-random.component';
import { PictSelectedComponent } from './pages/pict-selected/pict-selected.component';
import { PicDateComponent } from './pages/pic-date/pic-date.component';
import { PicDayComponent } from './pages/pic-day/pic-day.component';
import { ApodRoutingModule } from './apod-routing.module';



@NgModule({
  declarations: [
    HomeApodComponent,
    PictRandomComponent,
    PictSelectedComponent,
    PicDateComponent,
    PicDayComponent,

  ],
  imports: [
    CommonModule,
    ApodRoutingModule
  ]
})
export class ApodModule { }
