import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  public reasons = [];
  public appointements = [];

  constructor() {
    const numReasons = parseInt((Math.random() * 10).toString(), 10);
    // if (numReasons % 2 === 0) {
      this.reasons.push({ id: 1, title: 'Reason 1'});
      this.reasons.push({ id: 2, title: 'Reason 2'});
      this.reasons.push({ id: 3, title: 'Reason 3'});
      this.reasons.push({ id: 4, title: 'Reason 4'});
      this.reasons.push({ id: 5, title: 'Reason 5'});
    // } else {
    //   this.reasons.push({ id: 11, title: 'Reason 11'});
    //   this.reasons.push({ id: 22, title: 'Reason 22'});
    //   this.reasons.push({ id: 33, title: 'Reason 33'});
    //   this.reasons.push({ id: 44, title: 'Reason 44'});
    //   this.reasons.push({ id: 55, title: 'Reason 55'});
    // }
  }

  addAppointement(appointement: any): void {
    this.appointements.push(appointement);
  }

}
