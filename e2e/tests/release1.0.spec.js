var expect = require('chai').expect;
var LoginPage = require('../pages/login.page');
var AppointmentPage = require('../pages/appointment.page');

describe('User Can not successfully Login', function () {
    it('should allow an existing customer to Add and Submit an Appointment', function () {
        LoginPage.login('bademail@email.com', 'badpass');
        expect(LoginPage.loginMsg('Incorrect email or password!!!')).to.equal(true);
    });
});   

describe('User Adds Single Appointment', function () {
    it('should allow an existing customer to Add and Submit an Appointment', function () {
        LoginPage.login('email@email.com', 'password');
        expect(AppointmentPage.getPageTitle('LunchAndLearn')).to.equal(true);
        AppointmentPage.selectBookAppointment();
        AppointmentPage.enterAppointmentName('Doctors');
        AppointmentPage.selectAppointmentReason('Reason 1');
        AppointmentPage.setAppointmentStart('05', '45');
        AppointmentPage.setAppointmentEnd('07', '45');
        AppointmentPage.submitAppointment();
        expect(AppointmentPage.verifySubmitAppointmentFirst('Doctors')).to.equal(true);
    }, 3);
});

describe('User Adds Multiple Appointments', function () {
    it('should allow an existing customer to Add and Submit multiple Appointments', function () {
        LoginPage.login('email@email.com', 'password');
        AppointmentPage.selectBookAppointment();
        AppointmentPage.enterAppointmentName('Doctors');
        AppointmentPage.selectAppointmentReason('Reason 3');
        AppointmentPage.setAppointmentStart('05', '45');
        AppointmentPage.setAppointmentEnd('07', '45');
        AppointmentPage.submitAppointment();
        expect(AppointmentPage.verifySubmitAppointmentFirst('Doctors')).to.equal(true);
        AppointmentPage.selectBookAppointment();
        AppointmentPage.enterAppointmentName('Personal');
        AppointmentPage.selectAppointmentReason('Reason 4');
        AppointmentPage.setAppointmentStart('09', '45');
        AppointmentPage.setAppointmentEnd('11', '15');
        AppointmentPage.submitAppointment();
        expect(AppointmentPage.verifySubmitAppointmentSecond('Personal')).to.equal(true);
    }), 3;
});




