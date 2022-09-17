import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeApodComponent } from './pages/home-apod/home-apod.component';
import { PictRandomComponent } from './pages/pict-random/pict-random.component';
import { PictSelectedComponent } from './pages/pict-selected/pict-selected.component';
import { PicDateComponent } from './pages/pic-date/pic-date.component';
import { HttpClientModule } from '@angular/common/http';

import { ApodRoutingModule } from './apod-routing.module';
import { IframeComponent } from './components/iframe/iframe.component';
import { MaterialModule } from '../material/material.module';
import { PicDayComponent } from './pages/pic-day/pic-day.component';
import { BigImageComponent } from './components/big-image/big-image.component';
import { FormsModule } from '@angular/forms';
import { TextIntroComponent } from './components/text-intro/text-intro.component';
import { JupiterComponent } from './pages/jupiter/jupiter.component';



@NgModule({
  declarations: [
    HomeApodComponent,
    PictRandomComponent,
    PictSelectedComponent,
    PicDateComponent,
    IframeComponent,
    PicDayComponent,
    BigImageComponent,
    TextIntroComponent,
    JupiterComponent,

  ],
  imports: [
    CommonModule,
    ApodRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ApodModule { }
