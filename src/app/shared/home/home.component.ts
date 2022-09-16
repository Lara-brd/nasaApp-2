import { Component, HostListener} from '@angular/core';
import { Router } from '@angular/router';


interface cardInfo{
  title:string;
  subtitle:string;
  intro:string;
  longText:string;
  btnSend:string;
  link:string;
  active?:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {




//   cardsInfo:cardInfo [] = [
//     {
//     title:"Pictures of the day",
//     subtitle:' NASA pictures',
//     intro:'Every day a new picture.',
//     longText:'Since xxxxx NASA publish a picture every day width an interesting explanation about it, here you can see these pictures updated, choose a date or consult a mount of the at the same time',
//     btnSend: 'See Picture of the Day ... ',
//     link:'./apod/day',
//     active:true
//     },
//     {
//     title:"Library",
//     subtitle:' NASA library',
//     intro:'A library width pictures and videos',
//     longText:'Next update, library NASA',
//     link:'',
//     btnSend: ' '

//     }
// ]



//////////////////////////////////////////////////////

  constructor(private _router:Router) { }

 ///// ///////////////////////////////////////////////


  // getBorder(){
  //   return this._generalService.setBorder();
  // }

  // goTo(link:string){
  //   this._router.navigate([`${link}`])
  // }

  goToToday(){
    this._router.navigate(['./apod/day']);

  }

}
