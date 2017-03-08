"use strict";
class Page {
	constructor() {
		this.title = 'My Page';
	}
	open(path) {
		browser.url('/');
	}
}
module.exports = Page;