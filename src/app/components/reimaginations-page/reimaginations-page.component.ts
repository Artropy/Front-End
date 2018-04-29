import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-reimaginations-page',
  templateUrl: './reimaginations-page.component.html',
  styleUrls: ['./reimaginations-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReimaginationsPageComponent implements OnInit {

  
  public carouselOne: NgxCarousel;
  originals = [
    {
      imageName: "Rain",
      artistName: "Stephen Moreira",
      imageSource: "../assets/images/imageOne.jpg"
    },
    {     
      imageName: "Spring",
      artistName: "Ruby Perez",
      imageSource: "../assets/images/imageTwo.jpg"
    },
    {
      imageName: "Colors",
      artistName: "Kevin Marsh",
      imageSource: "../assets/images/imageThree.jpg"
    },
    {
      imageName: "Colors",
      artistName: "Kevin Marsh",
      imageSource: "../assets/images/imageThree.jpg"
    },
    {
      imageName: "Colors",
      artistName: "Kevin Marsh",
      imageSource: "../assets/images/imageThree.jpg"
    },
    {
      imageName: "Colors",
      artistName: "Kevin Marsh",
      imageSource: "../assets/images/imageThree.jpg"
    }
  ];

  constructor() { }


  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }

}
