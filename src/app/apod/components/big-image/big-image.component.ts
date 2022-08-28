import { Component, Input } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent {

  @Input() buttonText:string ='';
  @Input() link:string ='';

  get picture (){
    return this._apodService.picture;
  }

  get lightTheme(){
    return this._generalService.lightTheme;
  }

  ///////////////////////////////////////////////////

  constructor(  private _apodService:ApodService,
                private _generalService:GeneralService) { }

/////////////////////////////////////////////////////


  getBg(){
    return this._generalService.setBg()
  }

}
