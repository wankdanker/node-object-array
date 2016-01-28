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
var O = require('object-array');

var a = O();

a.push({ a : 1234 }, "asdf", 1234);

console.log(a);

/*
{ d4afb2e299d042cebca4a3774d4d037e: { a: 1234 },
  bba722d53ebd499f9670654568903843: 'asdf',
  aedc41da998a40bfbb4abd1a822212b7: 1234 }
*/
```

arrayish function status
------------------------

* concat
* every
* filter ✔
* forEach
* indexOf
* join
* lastIndexOf
* length
* map ✔
* pop ✔
* push ✔
* reduce
* reduceRight
* reverse
* shift ✔
* slice
* some
* sort
* splice
* unshift

license
-------

MIT