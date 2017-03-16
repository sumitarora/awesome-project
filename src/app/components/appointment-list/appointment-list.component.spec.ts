import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListComponent } from './appointment-list.component';
import { StoreService } from '../../services';

describe('AppointmentListComponent', () => {
  let component: AppointmentListComponent;
  let fixture: ComponentFixture<AppointmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentListComponent ],
      providers: [ StoreService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AppointmentListComponent correctly', () => {
    const storeService: StoreService = TestBed.get(StoreService);
    expect(storeService).toBeDefined();
    expect(component).toBeTruthy();
  });
});
