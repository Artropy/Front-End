import { Component, OnInit } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  onNavigateTo() {
    console.log('test');
    this.router.navigate(['login']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
