import { Component, OnInit, ViewEncapsulation, OnDestroy , Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
