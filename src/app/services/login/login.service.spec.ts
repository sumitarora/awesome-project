import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });

  it('should initalize service correctly', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('should return false if invalid login credentials', inject([LoginService], (service: LoginService) => {
    const result = service.login('aaa', 'asda');
    expect(result).toBeDefined();
    result.catch((data) => {
      expect(data).toBeDefined();
      expect(data).toBeFalsy();
    });
  }));

  it('should return true if valid login credentials', inject([LoginService], (service: LoginService) => {
    const result = service.login('email@email.com', 'password');
    expect(result).toBeDefined();
    result.then((data) => {
      expect(data).toBeDefined();
      expect(data).toBeTruthy();
    });
  }));
});
