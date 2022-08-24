import { Component } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-pic-date',
  templateUrl: './pic-date.component.html',
  styles: [`
    .wrapp{
      max-width:1200px;
    }
    .text-day{
      padding-top:20px;
      max-width:60%; 
    }

  `]
})
export class PicDateComponent {

  get picture(){
    return this._apodService.picture;
  }

  fecha!:Date;
  minDate:Date = new Date(1995,5,16);
  maxDate:Date = new Date();
  fechaSended:boolean = false;

  //////////////////////////////////////////////////

  constructor( private _apodService:ApodService) { }

  ////////////////////////////////////////////////////





  getData(){
    this.fechaSended = true;
    const data = this.formatDate();
    this._apodService.setPictureByDate(data); 
    console.log(this.picture)

  }

  prueba(){
    console.log(this.fecha)
  }


  formatDate(){
    return [
      this.fecha.getFullYear(),
      this.fecha.getMonth()+1,
      this.fecha.getDate(),
    ].join('-');
  }



}
