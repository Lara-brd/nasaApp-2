import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  videoUrl:string ='';
  genuineVideoUrl!:SafeResourceUrl;

  ////////////////////////////////////////////////


  constructor(
    private _apodService:ApodService,
    private _sanitizer:DomSanitizer
  ) {
      this.videoUrl = this._apodService.videoUrl;
      this.genuineVideoUrl = this._sanitizer
          .bypassSecurityTrustResourceUrl(this.videoUrl);
          this._apodService.videoUrl='';
    }


  //////////////////////////////////////////////

  ngOnInit(): void {
  }

}
