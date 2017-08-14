import { Component } from '@angular/core';

@Component({
  selector: 'slider-page',
  templateUrl: './templates/slider.html',
  styleUrls: [
    './css/slider.css'
  ],
})

export class SliderComponent {
  public pageNumber : number = 0;
  public pageCount : number = 0;
  public pages = [
		{
			image:"./assets/slider/1.jpg"
		},
		{
			image:"./assets/slider/2.jpg"
		},
		{
			image:"./assets/slider/3.jpg"
		},
		{
			image:"./assets/slider/4.jpg"
		},
		{
			image:"./assets/slider/5.jpg"
		}
	];

  }
