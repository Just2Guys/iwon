import { Component } from '@angular/core';
import { Http, Response, JsonpModule, Headers, RequestOptions } from '@angular/http';
import { FileUploader } from 'ng2-file-upload';

import 'rxjs/add/operator/map';

@Component({
  selector: 'about-us-page',
  templateUrl: 'templates/about.html',

})

export class AboutUsComponent {
  interiorImgs;
  exteriorImgs;
  img_load_amount;
  img_array;
  constructor(private http: Http) {
    this.http.get('http://localhost:3000/list-of-images/interior', {withCredentials: true})
    .map((res:Response) => res.json())
    .subscribe((data) => {
      this.interiorImgs = data;
    });
    this.http.get('http://localhost:3000/list-of-images/exterior', {withCredentials: true})
    .map((res:Response) => res.json())
    .subscribe(data => {
      this.img_load_amount = data[0];
      this.img_array = data[1];
      console.log(this.img_array[1]);
    });
  }
  public uploader:FileUploader = new FileUploader({url: 'http://localhost:3000/send-file'});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
