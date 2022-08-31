import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-text-intro',
  templateUrl: './text-intro.component.html',
  styles: [`
    h2{
      font-size: 1.8rem;
      font-family: 'Electrolize', sans-serif;
    }
  `]
})
export class TextIntroComponent implements OnInit {

  @Input() title:string = '';

  @Input() longText:string = '';

  constructor( private _generalService:GeneralService) { }

  ngOnInit(): void {
  }

  getColor(){
    return this._generalService.setColor();
  }

}
