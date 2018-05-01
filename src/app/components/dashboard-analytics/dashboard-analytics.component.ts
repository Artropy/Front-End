import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss']
})
export class DashboardAnalyticsComponent implements OnInit {
  barChartData =  {
    chartType: 'BarChart',
    dataTable: [
      ['Type', 'Today'],
      ['Views',     11],
      ['Likes',      2],
      ['Downloads',  2],
      ['Sponsers', 2],
      ['Followers',    7]
    ],
    options: {'title': 'Today'},
  };

  lineChartData =  {
    chartType: 'LineChart',
    dataTable: [
      ['2018', 'Views' , 'Likes' , 'Downloads' , 'Sponsers', 'Followers'],
      ['Jan.', 161, 60 , 46, 5, 6],
      ['Feb.', 11, 60 , 46, 56, 6],
      ['Mar',  611, 6 , 4, 5, 6],
      ['Apr.', 161, 0 , 64, 65, 6],
      ['May',  11, 0 , 4, 65, 6],
      ['Jun.', 11, 0 , 64, 5, 6],
      ['Jul',  161, 60 , 64, 5, 6],
      ['Aug',  117, 0 , 4, 5, 6],
      ['Sep.', 171, 7 , 74, 5, 76],
      ['Oct.', 811, 80 , 4, 5, 86],
      ['Nov.', 181, 0 , 4, 5, 6],
      ['Dec.', 11, 80 , 4, 5, 6],
    ],
    options: {'title': '2018'},
  };


  constructor() { }

  ngOnInit() {
  }


}
