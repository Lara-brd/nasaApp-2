import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  // activeTheme:string = '';

  lightTheme:boolean =true;


  constructor() { }

  changeTheme(e:string){
    this.lightTheme = (e === 'my-lighttheme')?true : false;
  }

  setBg(){
    return  this.lightTheme ? 'bg-orange': 'bg-blue';
  }

  setBorder(){
    return this.lightTheme ? 'border-light-primary': 'border-dark-primary';
  }

  setBgTransparent(){
    return this.lightTheme ? 'bg-lightprimary-transp': 'bg-darkprimary-trans';
  }


}
