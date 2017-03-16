import { Router } from '@angular/router';
import { StoreService } from '../../services/store/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

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
    const app = Object.assign({}, appointement);
    this._storeService.addAppointement(appointement);
    this._router.navigateByUrl('appointements');
  }

}
