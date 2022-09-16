import { Component, OnInit } from '@angular/core';
import { Library } from '../interfaces/search.interface';
import { LibService } from '../lib.service';

@Component({
  selector: 'app-home-library',
  templateUrl: './home-library.component.html',
  styles: [
  ]
})
export class HomeLibraryComponent implements OnInit {

  termino:string ='';

  result:any;


  constructor(  private _libservice:LibService ) { }

  ngOnInit(): void {
  }



  sendTermino(){
    console.log(this.termino);
    this._libservice.getInfoLib(this.termino)
      .subscribe((data)=>{
        console.log(data.collection);
        this.result = data.collection.items;

      })
  }





}
