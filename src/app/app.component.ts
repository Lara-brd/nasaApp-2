import { Component, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { ThemePalette } from '@angular/material/core';
import { GeneralService } from 'src/services/general.service';

interface linkSidebar {
  nameLink:String;
  link:String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasaApp';

  dark:boolean = false;
  light:boolean = false;

  mode:string='my-lighttheme';

  @HostBinding('class') componentCssClass:any;

  links:linkSidebar [] = [
    {
      nameLink:"Pictures of the day",
      link:"apod/day"
    },
    {
      nameLink:"Pictures Random",
      link:"apod/random"
    },
    {
      nameLink:"Pictures by date",
      link:"apod/date"
    }
  ];




  /////////////////////////////////////////////////////////


  constructor(  public overlayContainer:OverlayContainer,
                private _generalService:GeneralService){}


  /////////////////////////////////////////////////////////

  
  onSetTheme(e:string){

    if(this.overlayContainer.getContainerElement().classList.contains('my-lighttheme')){
      this.overlayContainer.getContainerElement().classList.remove('my-lighttheme'); 
      this.overlayContainer.getContainerElement().classList.add(e);
    }else{
      this.overlayContainer.getContainerElement().classList.remove('my-darktheme');
      this.overlayContainer.getContainerElement().classList.add(e);
    }
    this.componentCssClass = e;

    this._generalService.changeTheme(e);
    

  }

}
