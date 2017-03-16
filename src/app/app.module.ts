import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TimepickerModule } from 'ng2-bootstrap';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent, AppointmentComponent, AppointmentListComponent } from './components';
import { LoginService, StoreService } from './services';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'appointements', component: AppointmentListComponent },
  { path: 'appointement/book', component: AppointmentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    TimepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LoginService,
    StoreService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
