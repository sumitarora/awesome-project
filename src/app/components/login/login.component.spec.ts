import { Router } from '@angular/router';
import { tick, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../services';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ LoginComponent ],
      providers: [ LoginService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call login on loginService on calling login', () => {
    const router: Router = TestBed.get(Router);
    const loginService: LoginService = TestBed.get(LoginService);
    expect(component).toBeTruthy();
    expect(component.loginError).toBeFalsy();
    expect(loginService).toBeDefined();
    expect(router).toBeDefined();
  });

  it('should create LoginComponent correctly', async() => {
    const loginService: LoginService = TestBed.get(LoginService);
    expect(loginService).toBeDefined();

    const router: Router = TestBed.get(Router);
    expect(router).toBeDefined();

    spyOn(loginService, 'login').and.callThrough();
    spyOn(router, 'navigateByUrl').and.callThrough();

    component.login('email@email.com', 'password');
    expect(loginService.login).toHaveBeenCalledWith('email@email.com', 'password');

    tick();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/appointements');
  });

  it('should show error on invalid login', async() => {
    expect(component.loginError).toBeFalsy();
    const loginService: LoginService = TestBed.get(LoginService);
    expect(loginService).toBeDefined();

    spyOn(loginService, 'login').and.callThrough();

    component.login('email@a.com', 'password');
    expect(loginService.login).toHaveBeenCalledWith('email@a.com', 'password');

    tick();

    expect(component.loginError).toBeTruthy();
  });
});
