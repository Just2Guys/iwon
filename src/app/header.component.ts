import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'templates/header.html',
  styleUrls: ['css/header.css']
})

export class HeaderComponent {
  user_mobile;
  user_computer;
  menu_open=false;
  projectsBar_open=false;
  constructor() {
    if(matchMedia) {
      var mq=window.matchMedia("(min-width: 601px)");
      mq.addListener(this.WidthChange);
      this.WidthChange(mq);
    }
    window.addEventListener('orientationchange', this.doOnOrientationChange);
  }
  updatePage() {
    location.reload();
  }
  WidthChange(mq) {
    if(mq.matches) {
      this.user_computer=true;
      this.user_mobile=false;
    } else {
      this.user_computer=false;
      this.user_mobile=true;
    }
  }
  menu() {
    if(this.menu_open) {
      document.getElementById("menu-close").style.display="none";
      document.getElementById("menu").style.width="0px";
      document.getElementById("menu-stick-top").style.left="0";
      document.getElementById("menu-stick-top").style.top="0";
      document.getElementById("menu-stick-top").style.width="29px";
      document.getElementById("menu-stick-top").style.transformOrigin="0 0";
      document.getElementById("menu-stick-top").style.transform="rotate(0deg)";
      document.getElementById("menu-stick-mid").style.transform="rotate(0deg)";
      document.getElementById("menu-stick-mid").style.left="0";
      document.getElementById("menu-stick-mid").style.width="29px";
      document.getElementById("menu-stick-bot").style.left="0";
      document.getElementById("menu-stick-bot").style.top="22px";
      document.getElementById("menu-stick-bot").style.transformOrigin="0 0";
      document.getElementById("menu-stick-bot").style.transform="rotate(0deg)";
      document.getElementById("menu-stick-bot").style.width="29px";
      this.menu_open=false;
    } else {
      document.getElementById("menu-close").style.display="block";
      document.getElementById("menu").style.width="300px";
      document.getElementById("menu-stick-bot").style.left="0";
      document.getElementById("menu-stick-bot").style.top="0";
      document.getElementById("menu-stick-bot").style.width="21px";
      document.getElementById("menu-stick-bot").style.transformOrigin="3.5px 3.5px";
      document.getElementById("menu-stick-bot").style.transform="rotate(45deg)";
      document.getElementById("menu-stick-mid").style.transform="rotate(-225deg)";
      document.getElementById("menu-stick-mid").style.left="-3.5px";
      document.getElementById("menu-stick-mid").style.width="38px";
      document.getElementById("menu-stick-top").style.left="12.75px";
      document.getElementById("menu-stick-top").style.top="12.75px";
      document.getElementById("menu-stick-top").style.transformOrigin="3.5px 3.5px";
      document.getElementById("menu-stick-top").style.transform="rotate(45deg)";
      document.getElementById("menu-stick-top").style.width="21px";
      this.menu_open=true;
    }
  }
  projectsBar() {
    if(this.projectsBar_open) {
      document.getElementById("projects-bar").style.height="0";
      document.getElementById("partner").style.top="165px";
      this.projectsBar_open=false;
    } else {
      document.getElementById("projects-bar").style.height="80px";
      document.getElementById("partner").style.top="245px";
      this.projectsBar_open=true;
    }
  }

  doOnOrientationChange() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      location.reload();
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
      location.reload();
    }
  }
}
