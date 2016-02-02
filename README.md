object-array
------------

Add array-like functionality to objects while using unique ids instead of numeric indexes

install
-------

```sh
npm install object-array
```

usage
-----

```js
var ObjectArray = require('object-array');

var a = ObjectArray();

a.push({ a : 1234 }, "asdf", 1234);

console.log(a);

/*
{ d4afb2e299d042cebca4a3774d4d037e: { a: 1234 },
  bba722d53ebd499f9670654568903843: 'asdf',
  aedc41da998a40bfbb4abd1a822212b7: 1234 }
*/
```

### ObjectArray.applyPrototype(constructor)

Add the methods of ObjectArray to some other object. If no other
object is specified then the methods are applied to Object's prototype.

* constructor - [optional] the object to which ObjectArray's methods 
	should be applied. Default: Object

```js
require('object-array').applyPrototype();

var a = {};

a.push("hello", "world");

console.log(a);

/*
{ a5cb5e9db6224dc292d791b7d40cb0ae: 'hello',
  b909283f322746fa907cb4c16b1806e3: 'world' }
*/
```

arrayish function status
------------------------

* concat()
* every()
* filter() ✔
* forEach() ✔ 
* indexOf() ✔
* join()
* lastIndexOf()
* length ✔
	* length() is implemented as a function
* map() ✔
* pop() ✔
* push() ✔
	* returns an array of keys added instead of the total length of the array
* reduce()
* reduceRight()
* reverse()
* shift() ✔
* slice()
* some()
* sort()
* splice()
* unshift()

license
-------

MIT
