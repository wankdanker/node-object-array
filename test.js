var test = require('tape');

require('./').applyPrototype();

test('usage', function (t) {
	var a = {};

	t.equal(a.push({ a : 'Hello' }, { b : 'World' }, { c : 'Once' }), 3);
	
	t.equal(a.length(), 3);
	
	t.deepEqual(a.map(function (o) { return o; }), [{ a : 'Hello' }, { b : 'World' }, { c : 'Once' }] );
	
	a.push('hello');
	a.push('there');
	
	t.deepEqual(a.filter(function (o) { return (typeof o === 'string') }), ['hello', 'there'])
	
	a.pop();
	a.pop();
	
	t.deepEqual(a.pop(), { c : 'Once' });
	t.deepEqual(a.shift(), { a : 'Hello' });
	
	t.end();
});