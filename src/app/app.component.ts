import { Component, VERSION } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  tableData: any;
  constructor(private appService: AppService) {
    this.appService.getTableData().subscribe((data) => {
      this.tableData = data;
    });
  }
}
