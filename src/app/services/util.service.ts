import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() {
  }

  getToday() {

    const today: Date = new Date();
    const dd: number = today.getDate();
    const mm: number = today.getMonth() + 1;
    const yyyy: number = today.getFullYear();
    let day: string;
    let month: string;
    let year: string;

    // Correctly parse the date to return something like { day: '01', month: '08, year: '2017' }

    if (dd < 10) {
      day = '0' + dd;
    } else {
      day = dd.toString();
    }

    if (mm < 10) {
      month = '0' + mm;
    } else {
      month = mm.toString();
    }

    year = yyyy.toString();

    return {
      day: day,
      month: month,
      year: year
    };
  }
}
