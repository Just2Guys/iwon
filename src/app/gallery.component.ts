import { Component } from '@angular/core';

import { GALLERY_IMGS } from './mock-gallery-imgs';

@Component({
  selector: 'gallery-page',
  templateUrl: 'templates/gallery.html',
  styleUrls: [
    'css/gallery.css',
    'css/gallery-slider.css'
  ]
})

export class GalleryComponent {
  img_exterior: string;
  exist_exterior=false;
  img_interior: string;
  exist_interior=false;
  user_computer:Boolean;
  imgs=GALLERY_IMGS;
  constructor() {
    if(matchMedia) {
      var mq=window.matchMedia("(min-width: 600px)");
      mq.addListener(this.WidthChange);
      this.WidthChange(mq);
    }
    for(let i=0;;i++) {
      if(this.exist_exterior===false)
        if(this.imgs[i].type==='exterior' && this.imgs[i].main===true) {
          this.img_exterior=this.imgs[i].image;
          this.exist_exterior=true;
        }
      if(this.exist_interior===false)
        if(this.imgs[i].type==='interior' && this.imgs[i].main===true) {
          this.img_interior=this.imgs[i].image
          this.exist_interior=true;
        }
      if(this.exist_exterior===true && this.exist_interior===true)
        break;
    }
  }
  updatePage() {
    location.reload();
  }
  blockMouseOver(pos) {
    if(this.user_computer) {
      const inter=document.getElementById("interior").style;
      const exter=document.getElementById("exterior").style;
      const interImg=document.getElementById("interiorImg").style;
      const exterImg=document.getElementById("exteriorImg").style;
      if(pos==='left') {
        inter.width="70%";
        interImg.filter="blur(0px) grayscale(0%)";
        exter.width="30%";
        exterImg.filter="blur(1.5px) grayscale(100%)";
      }
      if(pos==='right') {
        exter.width="70%";
        exterImg.filter="blur(0px) grayscale(0%)";
        inter.width="30%";
        interImg.filter="blur(1.5px) grayscale(100%)";
      }
    }
  }
  blockMouseLeave() {
    const inter=document.getElementById("interior").style;
    const exter=document.getElementById("exterior").style;
    const interImg=document.getElementById("interiorImg").style;
    const exterImg=document.getElementById("exteriorImg").style;
    inter.width="50%";
    interImg.filter="blur(1.5px) grayscale(100%)";
    exter.width="50%";
    exterImg.filter="blur(1.5px) grayscale(100%)";
  }
  WidthChange(mq) {
    if(mq.matches) {
      this.user_computer=true;
    } else {
      this.user_computer=false;
    }
  }
}
