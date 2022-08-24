import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Picture } from '../interfaces/picture.interface';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  apiKey:string='?api_key=FpIgY0iFIgo4bIRtpdXa3p7OLHKOn5UY0w0z3Kui';
  apiUrl:string = 'https://api.nasa.gov/planetary/apod';


  picture!:Picture;
  videoUrl:string ='';

  /////////////////////////////////////////////

  constructor( private http:HttpClient) { }

 //////////////////////////////////////////////




  //day
  setPictureDay(){
  this.http.get<Picture>(`${this.apiUrl}${this.apiKey}`)
    .subscribe(data => {
      this.picture= data;
      console.log(this.picture)
      if(this.picture.media_type ==='video'){
        this.videoUrl = this.picture.url;
      }
    })
}

}
