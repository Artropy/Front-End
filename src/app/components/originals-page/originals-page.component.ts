import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-originals-page',
  templateUrl: './originals-page.component.html',
  styleUrls: ['./originals-page.component.scss']
})
export class OriginalsPageComponent implements OnInit {

  originals = [
    {
      imageName: "Rain",
      artistName: "Stephen Moreira",
      imageSource: "assets/images/imageOne.jpg"
    },
    {
      imageName: "Spring",
      artistName: "Ruby Perez",
      imageSource: "assets/images/imageTwo.jpg"
    },
    {
      imageName: "Colors",
      artistName: "Kevin Marsh",
      imageSource: "assets/images/imageThree.jpg"
    },
    {
      imageName: "Stars",
      artistName: "Rodrigo Zuniga",
      imageSource: "assets/images/imageFour.jpg"
    },
    {
      imageName: "Rain",
      artistName: "Stephen Moreira",
      imageSource: "assets/images/imageOne.jpg"
    },
    {
      imageName: "Spring",
      artistName: "Ruby Perez",
      imageSource: "assets/images/imageTwo.jpg"
    },
    {
      imageName: "Colors",
      artistName: "Kevin Marsh",
      imageSource: "assets/images/imageThree.jpg"
    },
    {
      imageName: "Stars",
      artistName: "Rodrigo Zuniga",
      imageSource: "assets/images/imageFour.jpg"
    },
    {
      imageName: "Rain",
      artistName: "Stephen Moreira",
      imageSource: "assets/images/imageOne.jpg"
    },
    {
      imageName: "Spring",
      artistName: "Ruby Perez",
      imageSource: "assets/images/imageTwo.jpg"
    },
    {
      imageName: "Colors",
      artistName: "Kevin Marsh",
      imageSource: "assets/images/imageThree.jpg"
    },
    {
      imageName: "Stars",
      artistName: "Rodrigo Zuniga",
      imageSource: "assets/images/imageFour.jpg"
    }
  ];



  constructor() { }

  ngOnInit() {
    // this.getOriginals();
  }


  originalMouseEnter() {
    console.log('mouse Enter :');
  }

  originalMouseLeave(div: string , value) {
    console.log('mouse leave :');
  }

  // NOTE: One Click tooltip note
  setBackgroundImage (imagePath) {
    // return 'background-image: url(' + imagePath + ');';
  }

}
