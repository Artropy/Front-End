import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  
  // Currently not being used. Eventually we can put the entire model in the database to pull? 
  sideNavModel = [
      {
        "name" : "Art Feed",
        "route" : "/feed",
        "icon" : "",
        "activeFlag" : false
      }
  ];

  activeNav = {
   "artFeed" : false,
   "originals" : false,
   "studios" : false,
   "imaginations" : false,
   "trending" : false,
   "masterworks" : false,
   "history" : false,
   "liked" : false,
   "following" : false,
   "followers" : false,
   "genres" : false,
   "events" : false,
  }





  constructor() { }

  ngOnInit() {
  }

  activateRoute(clickedRoute: true ){
    clickedRoute = true;
  }
  

}
