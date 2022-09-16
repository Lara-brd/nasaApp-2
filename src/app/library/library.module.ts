import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLibraryComponent } from './home-library/home-library.component';
import { LibRoutingModule } from './lib-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeLibraryComponent
  ],
  imports: [
    CommonModule,
    LibRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class LibraryModule { }
