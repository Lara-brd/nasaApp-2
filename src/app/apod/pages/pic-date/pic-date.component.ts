import { Component } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-pic-date',
  templateUrl: './pic-date.component.html',
  styles: [`
    .wrapp{
      padding:50px;
      max-width:1200px;
    }
    .text-day{
      max-width:60%; 
    }
    .search{
      margin-top:10px;
      height:90px;
  
    }
    .submit{
      margin-left:20px;
      padding-left:20px;
      padding-right:20px;
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

  constructor(  private _apodService:ApodService,
                private _generalService:GeneralService) { }

  ////////////////////////////////////////////////////





  getData(){

    this.fechaSended = true;
    const data = this.formatDate();
    this._apodService.setPictureByDate(data); 
    if(this.fecha == undefined){
      console.log(undefined)
    }
    console.log(this.fecha);

  }

  formatDate(){
    return [
      this.fecha.getFullYear(),
      this.fecha.getMonth()+1,
      this.fecha.getDate(),
    ].join('-');
  }

}
