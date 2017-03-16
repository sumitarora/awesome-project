import { TestBed, inject } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreService]
    });
  });

  it('should initalize service correctly', inject([StoreService], (service: StoreService) => {
    expect(service).toBeTruthy();
    expect(service.appointements.length).toBe(0);
    expect(service.reasons.length).toBeGreaterThan(0);
  }));

  it('should add appointement when calling addAppointement', inject([StoreService], (service: StoreService) => {
    const length = service.appointements.length;
    const appointement = {
      name: 'Name',
      startDate: new Date(),
      endDate: new Date(),
      reason: 1
    };
    service.addAppointement(appointement);
    expect(service.appointements.length).toBe(length + 1);
    expect(service.appointements[0]).toBeDefined();
    expect(service.appointements[0]).toBe(appointement);
  }));

});
