"use strict";
var expect = require('chai').expect;
var Page = require('./page')


class LoginPage extends Page {
    get email()     { return browser.element('#email'); }
    get password()  { return browser.element('#password'); }
    get form()      { return browser.element('app-login > div > div > div.panel-body > form > button'); }
    get flash()   { return browser.element('app-login > div > div > div.panel-body > div'); }

    open() {
        super.open();
    }
    
    submit() {
        this.form.submitForm();
    }

    login(email, password) {
        this.open();
        this.email.setValue(email);
        this.password.setValue(password);
        this.submit();
    }

    loginMsg(message) {
        var getMsg = this.flash.getText();
            if(getMsg.includes(message)) {
                return true;    
            }
            else {
                return false;
            }
        }
}

module.exports = new LoginPage();