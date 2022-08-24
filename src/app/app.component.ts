import { Component, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasaApp';

  mode:string='my-lighttheme';

  @HostBinding('class') componentCssClass:any;

  constructor( public overlayCont:OverlayContainer){}

  
  onSetTheme(){
    if(this.mode === 'my-lighttheme'){
      this.mode = 'my-darktheme'
    }else{
      this.mode = 'my-lighttheme'
    }

    this.overlayCont.getContainerElement().classList.add(this.mode);
    this.componentCssClass = this.mode;
  }

}
