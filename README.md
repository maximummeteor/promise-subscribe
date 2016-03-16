# maximum:promise-subscribe [![Circle CI](https://circleci.com/gh/maximummeteor/promise-subscribe.svg)](https://circleci.com/gh/maximummeteor/promise-subscribe)
Meteor package that adds promise support to subcriptions

## Installation
```
    meteor add maximum:promise-subscribe
```

## Usage

`promiseSubscribe` will call the `subscribe` method on `this`. So may you have call `promiseSubscribe` with a `this` value which implements a `subscribe` method.
````javascript
  import { promiseSubscribe } from 'meteor/maximum:promise-subscribe';

  promiseSubscribe.call(Meteor, 'my-publication', arg1, arg2).then(() => {
    console.log('subscription ready');
  }).catch((error) => {
    console.log('subscription failed', error);
  })
````

## License
Licensed under MIT license. Copyright (c) 2016 Max Nowack

## Contributions

Contributions are welcome. Please open issues and/or file Pull Requests.

## Maintainers

- Max Nowack ([maxnowack](https://github.com/maxnowack))
