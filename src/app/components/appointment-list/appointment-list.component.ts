import { StoreService } from '../../services/store/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(
    private _storeService: StoreService
  ) { }

  ngOnInit() {
  }

}
