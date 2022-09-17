import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-jupiter',
  templateUrl: './jupiter.component.html',
  styles: [
  ]
})
export class JupiterComponent implements OnInit {

  constructor( private _apodService:ApodService) { }

  ngOnInit(): void {
    this._apodService.setPictureByDate('2022-01-09');
  }

}
