import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from '../../interfaces/picture.interface';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-pict-random',
  templateUrl: './pict-random.component.html',
  styleUrls: ['./pict-random.component.scss']
})
export class PictRandomComponent implements OnInit {

  get pictures(){
    return this._apodService.picturesRandom;
  }


  constructor( private _apodService:ApodService,
    private _router:Router) { }

  ngOnInit(): void {
    if(this._apodService.picturesRandom.length === 0){
      this._apodService.setPictureRandom();
    }
  }


  getPicture(pict:Picture){
    this._apodService.picture = pict;
    this._router.navigate(['/apod/selected'])
  }

  resetPictures(){
    this._apodService.picturesRandom = [];
    this._apodService.setPictureRandom();
  }

}
