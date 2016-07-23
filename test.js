'use strict';

const test = require('ava');
const jsdom = require('jsdom');

global.document = jsdom.jsdom();
global.window = document.defaultView;

window.CustomEvent = undefined;
const CE = require('./');

test('should create an instance', t => {
	const e = new CE('rainbow');

	t.is(e.type, 'rainbow');
	t.is(e.bubbles, false);
	t.is(e.cancelable, false);
	t.is(e.detail, undefined);
});

test('should create an instance that bubbles', t => {
	const e = new CE('rainbow', {
		bubbles: true
	});

	t.is(e.type, 'rainbow');
	t.is(e.bubbles, true);
	t.is(e.cancelable, false);
	t.is(e.detail, undefined);
});

test('should create an instance that is cancelable', t => {
	const e = new CE('rainbow', {
		cancelable: true
	});

	t.is(e.type, 'rainbow');
	t.is(e.bubbles, false);
	t.is(e.cancelable, true);
	t.is(e.detail, undefined);
});

test('should create an instance that has detail object', t => {
	const e = new CE('rainbow', {
		detail: {
			unicorn: 'fly'
		}
	});

	t.is(e.type, 'rainbow');
	t.is(e.bubbles, false);
	t.is(e.cancelable, false);
	t.is(e.detail.unicorn, 'fly');
});
