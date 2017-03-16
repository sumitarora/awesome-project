import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ng2-bootstrap';

import { AppointmentComponent } from './appointment.component';
import { StoreService } from '../../services';

describe('AppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, TimepickerModule.forRoot() ],
      declarations: [ AppointmentComponent ],
      providers: [StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AppointmentComponent correctly', () => {
    expect(component).toBeTruthy();
    expect(component.appointement).toBeTruthy();
  });

  it('should add appointements on calling addAppointement', () => {
    const storeService: StoreService = TestBed.get(StoreService);
    expect(storeService).toBeDefined();
    expect(storeService.appointements.length).toBe(0);

    const router: Router = TestBed.get(Router);
    expect(router).toBeDefined();

    spyOn(storeService, 'addAppointement').and.callThrough();
    spyOn(router, 'navigateByUrl').and.callThrough();

    const appointement = {
      name: 'Name',
      startTime: new Date(),
      endTime: new Date(),
      reason: 1
    };
    component.addAppointement(appointement);
    expect(storeService.addAppointement).toHaveBeenCalledWith(appointement);
    expect(router.navigateByUrl).toHaveBeenCalled();
    expect(storeService.appointements.length).toBe(1);
  });
});
