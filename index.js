'use strict';

function useNative() {
	if (typeof window.CustomEvent === 'function') {
		return true;
	}

	return false;
}

// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
module.exports = useNative() ? window.CustomEvent : function (event, params) {
	const e = document.createEvent('CustomEvent');

	params = params || {
		bubbles: false,
		cancelable: false,
		detail: undefined
	};

	e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

	return e;
};
