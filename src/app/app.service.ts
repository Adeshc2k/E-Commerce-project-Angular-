import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  getTableData() {
    return of([
      {
        name: 'a',
        noOfTimesUsed: 1,
      },
      {
        name: 'b',
        noOfTimesUsed: 9,
      },
      {
        name: 'c',
        noOfTimesUsed: 12,
      },
      {
        name: 'd',
        noOfTimesUsed: 3,
      },
    ]);
  }
}
