import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-pict-selected',
  templateUrl: './pict-selected.component.html',
  styles: [
  ]
})
export class PictSelectedComponent implements OnInit {

  get picture(){
    return this._apodService;
  }

  link:string = "/apod/random";

  isVideo:boolean = false;

  constructor(  private _apodService:ApodService,
                private _router:Router) { }

  ngOnInit(): void {
  }

}
