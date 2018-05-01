import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-monetization',
  templateUrl: './dashboard-monetization.component.html',
  styleUrls: ['./dashboard-monetization.component.scss']
})
export class DashboardMonetizationComponent implements OnInit {
  barChartData = {
    chartType: 'BarChart',
    dataTable: [
      ['Type', 'Today'],
      ['Advertisments', 11],
      ['Donations', 2],
      ['Sponsers', 2],
      ['Sales', 2]
    ],
    options: {
      'title': 'Today', hAxis: {
        title: 'USD', color: '#0f0',
        format: '$#'
      }
    },
  };

  lineChartData = {
    chartType: 'LineChart',
    dataTable: [
      ['2018', 'Advertisments', 'Donations', 'Sponsers', 'Sales'],
      ['Jan.', 161, 60, 46, 5],
      ['Feb.', 11, 60, 46, 56],
      ['Mar', 611, 6, 4, 5],
      ['Apr.', 161, 0, 64, 65],
      ['May', 11, 0, 4, 65],
      ['Jun.', 11, 0, 64, 5],
      ['Jul', 161, 60, 64, 5],
      ['Aug', 117, 0, 4, 5],
      ['Sep.', 171, 7, 74, 5],
      ['Oct.', 811, 80, 4, 5],
      ['Nov.', 181, 0, 4, 5],
      ['Dec.', 11, 80, 4, 5],
    ],
    options: { 'title': '2018', hAxis: {
      title: 'USD', color: '#0f0',
      format: '$#'
    }},
  };

  constructor() { }

  ngOnInit() {
  }

}
