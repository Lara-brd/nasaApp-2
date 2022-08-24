import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-pict-random',
  templateUrl: './pict-random.component.html',
  styles: [
  ]
})
export class PictRandomComponent implements OnInit {

  constructor( private _apodService:ApodService) { }

  ngOnInit(): void {
  }

}
