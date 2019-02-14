# customevent [![Build Status](https://travis-ci.org/awcross/customevent.svg?branch=master)](https://travis-ci.org/awcross/customevent)

> [Ponyfill](https://ponyfill.com) for [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)


## Install

```
$ npm install --save customevent
```


## Usage

```js
const customEvent = require('customevent');

const event = new customEvent('click', {
	cancelable: true,
	bubbles: false,
	detail: {
		foo: 'bar'
	}
});
```


## API

### customEvent(typeArg, [customEventInit])

Creates a custom event and returns an event

#### typeArg

Type: `string`

A [DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) representing the name of the event.

#### customEventInit (optional)

Type: `object`


## License

MIT © [Alex Cross](https://alexcross.io)
