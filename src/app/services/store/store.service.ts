import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  public reasons = [];
  public appointements = [];

  constructor() {
    const numReasons = parseInt((Math.random() * 10).toString(), 10);
    for (let i = 0; i < numReasons; i++) {
      this.reasons.push({
        id: i,
        title: 'Reason ' + (i + 1)
      });
    }
  }

  addAppointement(appointement: any): void {
    this.appointements.push(appointement);
  }

}
