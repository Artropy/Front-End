import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-top-nav-bar',
  templateUrl: 'top-nav.html',
  styleUrls: ['top-nav.scss']
})
export class ArtropyTopNavComponent {

 // @ViewChild('sidenav') myLeftSideNav: SideNavComponent;

  navOpen() {
    this.myLeftSideNav.emit(true);
  }


  OnInit() {

  }

  ngAfterViewInit() {
    // child is set
  }

  closeLeftSideNav(){
    this.myLeftSideNav.toggle();
  }


  
}
