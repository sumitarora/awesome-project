var expect = require('chai').expect;
var LoginPage = require('../pages/login.page');

describe('User Journey Foo', function () {
    it('should allow an existing customer to Add and Submit an Appointment ', function () {
        LoginPage.login('test@testit.com', 'ThisPass');
        // expect(LoginPage.loginMsg('Your username is invalid!')).to.equal(true);
    }); 


    
});



