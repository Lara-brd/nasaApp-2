import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-pic-date',
  templateUrl: './pic-date.component.html',
  styles: [
  ]
})
export class PicDateComponent implements OnInit {

  constructor( private _apodService:ApodService) { }

  ngOnInit(): void {
  }

}
