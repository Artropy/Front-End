import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImagePageComponent implements OnInit {

  // constructor(public snackBar: MatSnackBar) {}

  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }


  ngOnInit() {

  }

}
