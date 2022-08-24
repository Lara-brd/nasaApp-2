import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent implements OnInit {

  @Input() buttonText:string ='';
  @Input() link:string ='';

  get picture (){
    return this._apodService.picture;
  }


  constructor(  private _apodService:ApodService,
                private _router:Router) { }

  ngOnInit(): void {
  }

}
