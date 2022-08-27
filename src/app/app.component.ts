import { Component, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasaApp';

  mode:string='my-lighttheme';

  @HostBinding('class') componentCssClass:any;

  constructor( public overlayContainer:OverlayContainer){}

  
  onSetTheme(e:string){

    this.overlayContainer.getContainerElement().classList.remove(e);

  
    if(this.overlayContainer.getContainerElement().classList.contains('my-lighttheme')){
      this.overlayContainer.getContainerElement().classList.remove('my-lighttheme'); 
      this.overlayContainer.getContainerElement().classList.add('my-darktheme');
    }else{
      this.overlayContainer.getContainerElement().classList.remove('my-darktheme');
      this.overlayContainer.getContainerElement().classList.add('my-lighttheme');
    }

  
    this.componentCssClass = e;

  }

}
