import { Router } from '@angular/router';
import { StoreService } from '../../services/store/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  public showError: string;
  public appointement = {
    name: '',
    reason: '',
    startTime: new Date(),
    endTime: new Date()
  };

  constructor(
    private _storeService: StoreService,
    private _router: Router
  ) { }

  addAppointement(appointement: any) {
    this.showError = undefined;
    const difference = (appointement.endTime.valueOf() - appointement.startTime.valueOf()) / (3600 * 1000);
    if (difference < 0) {
      this.showError = 'Start time should be more than end time';
    } else if (difference > 2) {
      this.showError = 'Maximum duration can only be 2 hours';
    } else {
      const app = Object.assign({}, appointement);
      this._storeService.addAppointement(appointement);
      this._router.navigateByUrl('appointements');
    }
  }

}
