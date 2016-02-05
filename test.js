var test = require('tape');

require('./').applyPrototype();

test('usage', function (t) {
	var a = {};

	t.deepEqual(a.push({ a : 'Hello' }, { b : 'World' }, { c : 'Once' }), [Object.keys(a)[0], Object.keys(a)[1], Object.keys(a)[2]]);
	
	t.equal(a.length(), 3);
	
	t.deepEqual(a.map(function (o) { return o; }), [{ a : 'Hello' }, { b : 'World' }, { c : 'Once' }] );

	var b = [];

	a.forEach(function (el, ix, obj) {
		b.push(el);
	});

	t.deepEqual(b, [{ a : 'Hello' }, { b : 'World' }, { c : 'Once' }]);

	a.push('hello');
	a.push('there');
	
	t.deepEqual(a.filter(function (o) { return (typeof o === 'string') }), ['hello', 'there'])
	
	t.equal(a.indexOf('not-in-there'), -1);
	t.equal(a.indexOf('hello'), 3);
	t.equal(a.indexOf('hello', 4), -1);
	
	a.pop();
	a.pop();
	
	t.deepEqual(a.pop(), { c : 'Once' });
	t.deepEqual(a.shift(), { a : 'Hello' });

	console.log(a);
	console.log(a.copy());


	t.end();
});
