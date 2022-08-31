import { Component } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-pic-date',
  templateUrl: './pic-date.component.html',
  styleUrls: ['./pic-date.component.scss']
})
export class PicDateComponent {

  title:string = 'Pictures by date';
  longText:string ='Sinze 1995/jun/16 NASA  publishes every day a picture or video toguether width an explanation about astrology, using the datepicker you can find the picture of the day you want.'

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





  filterFrom(){

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
