"use strict";
var expect = require('chai').expect;
var Page = require('./page')
var LoginPage = require('../pages/login.page')

class AppointmentPage extends Page {
    get page()                { return browser.element('#email'); }
    get bookAppointmentBtn()  { return browser.element('body > div > app-root > app-appointment-list > a'); }
    get name()				  { return browser.element('app-appointment > div > div > div.panel-body > form > div:nth-child(1) > input'); }
    get reasonDropdown()      { return browser.element('app-appointment > div > div > div.panel-body > form > div:nth-child(2) > select'); }
    get startTimeHr()		  { return browser.element('div:nth-child(3) > timepicker > table > tbody > tr:nth-child(2) > td:nth-child(1) > input'); }
    get startTimeMin()		  { return browser.element('div:nth-child(3) > timepicker > table > tbody > tr:nth-child(2) > td:nth-child(3) > input'); }  
    get endTimeHr()		      { return browser.element('div:nth-child(4) > timepicker > table > tbody > tr:nth-child(2) > td:nth-child(1) > input'); }
    get endTimeMin()		  { return browser.element('div:nth-child(4) > timepicker > table > tbody > tr:nth-child(2) > td:nth-child(3) > input'); }  
    get startPeriod()      { return browser.element('div:nth-child(3) > timepicker > table > tbody > tr:nth-child(2) > td:nth-child(4) > button'); }
    get endPeriod()      { return browser.element('div:nth-child(4) > timepicker > table > tbody > tr:nth-child(2) > td:nth-child(4) > button'); }
    get appForm()             { return browser.element('app-appointment > div > div > div.panel-body > form > button'); }

    get appListing1()         { return browser.element('app-appointment-list > table > tbody > tr:nth-child(2) > td:nth-child(1)'); }
    get appListing2()         { return browser.element('app-appointment-list > table > tbody > tr:nth-child(3) > td:nth-child(1)'); }



	submit() {
        this.appForm.submitForm();
    }


    getPageTitle(pageTitle) {
        var getTitle = browser.getTitle();
        if(getTitle.includes(pageTitle)) {
        	return true;
        }
        else {
        	return false;
        }
    }

    selectBookAppointment() {
    	this.bookAppointmentBtn.click();
    }
 	
 	enterAppointmentName(appName) {
 		this.name.setValue(appName);
 	}

 	selectAppointmentReason(appReason) {
 		this.reasonDropdown.selectByVisibleText(appReason);
 	}

 	setAppointmentStart(hr, min, period) {
        var getStartPeriod = this.startPeriod.getText();
        console.log(getStartPeriod);
 		this.startTimeHr.setValue(hr);
 		this.startTimeMin.setValue(min);
        if(getStartPeriod.includes(period)) {
            return true;
        }
        else {
            this.startPeriod.click();
        }

 	}

 	setAppointmentEnd(hr, min, period) {
        var getEndPeriod = this.endPeriod.getText();
 		this.endTimeHr.setValue(hr);
 		this.endTimeMin.setValue(min);
        if(getEndPeriod.includes(period)) {
            return true;
        }
        else {
            this.endPeriod.click();
        }
 	}


 	submitAppointment() {
 		this.submit();
 	}
 	
 	verifySubmitAppointmentFirst(appName) {
 		var getAppList1 = this.appListing1.getText();
 			if(getAppList1.includes(appName)) {
 				return true;    
            }
            else {
                return false;
            }
        }

    verifySubmitAppointmentSecond(appName) {
 		var getAppList2 = this.appListing2.getText();
 		console.log(getAppList2);
 		console.log(appName);
 			if(getAppList2.includes(appName)) {
 				return true;    
            }
            else {
                return false;
            }
        }





}

module.exports = new AppointmentPage();   