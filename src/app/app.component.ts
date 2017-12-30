import { Component } from '@angular/core';
import {MockBackendService} from './mock-backend/mock-backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MockBackendService]
})
export class AppComponent {
  title = 'app';
  constructor(
    private mockBackendService: MockBackendService
) {
    this.mockBackendService.start();
}
}
