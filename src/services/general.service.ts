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

  setColor(){
    return this.lightTheme ? 'color-lightprimary-transp': 'color-darkprimary-transp';
  }

  setBgLogo(){
    return  this.lightTheme ? 'bg-orange': 'bg-blue';
  }
  // .color-lightprimary-transp{
  //   color: $light-primary;
  
  // }
  
  // .color-darkprimary-transp{
  //   color:$dark-primary;
  // }


}
