import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

interface cardInfo{
  title:string;
  subtitle:string;
  intro:string;
  longText:string;
  btnSend:string;
  active?:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  cardsInfo:cardInfo [] = [
    {
    title:"Pictures of the day",
    subtitle:' NASA pictures',
    intro:'Every day a new picture.',
    longText:'Since xxxxx NASA publish a picture every day width an interesting explanation about it, here you can see these pictures updated, choose a date or consult a mount of the at the same time',
    btnSend: 'See pictures ... ',
    active:true
    },
    {
    title:"Library",
    subtitle:' NASA library',
    intro:'A library width pictures and videos',
    longText:'Search in the library anything about NASA or cosmos...,',
    btnSend: 'See pictures ... '
    }
]



//////////////////////////////////////////////////////

  constructor( private _generalService:GeneralService) { }

 ///// ///////////////////////////////////////////////



  ngOnInit(): void {
  }

  getBorder(){
    return this._generalService.setBorder();
  }

}
