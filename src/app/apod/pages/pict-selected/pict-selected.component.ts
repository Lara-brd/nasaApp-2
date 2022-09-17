import { Component } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-pict-selected',
  templateUrl: './pict-selected.component.html',
  styles: [
  ]
})
export class PictSelectedComponent {

  get picture(){
    return this._apodService;
  }

  link:string = "/apod/random";

  isVideo:boolean = false;

  constructor(  private _apodService:ApodService) { }

}
