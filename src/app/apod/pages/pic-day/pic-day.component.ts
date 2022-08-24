import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';


@Component({
  selector: 'app-pic-day',
  templateUrl: './pic-day.component.html',
  styles: [
  ]
})
export class PicDayComponent implements OnInit {

  constructor( private _apodService:ApodService ) { }

  ngOnInit(): void {
    this._apodService.setPictureDay();
  }

}
