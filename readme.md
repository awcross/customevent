# custom-event [![Build Status](https://travis-ci.org/awcross/custom-event.svg?branch=master)](https://travis-ci.org/awcross/custom-event)

> ES2015 ponyfill for [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)


## Install

```
$ npm install --save custom-event
```


## Usage

```js
const MyCustomEvent = require('custom-event');

new MyCustomEvent('click', {
	cancelable: true,
	bubbles: false,
	detail: {
		unicorn: 'rainbows'
	}
});
```


## API

### MyCustomEvent(eventType, [customEventInit])

Creates a custom event and returns an event

#### eventType

Type: `string`

A [DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) representing the name of the event.

#### customEventInit (optional)

Type: `object`


## License

MIT © [Alex Cross](http://alexcross.io)
