"use strict";

var uuid = require('node-uuid');
var keys = Object.keys;

module.exports = ObjectArray;
module.exports.applyPrototype = applyPrototype;

function applyPrototype (target) {
	target = target || Object;
	
	Object.keys(ObjectArray.prototype).forEach(function (key) {
		target.prototype[key] = ObjectArray.prototype[key];
	});
	
	ObjectArray.call(target);
}

function ObjectArray () {
	if (this instanceof ObjectArray === false) {
		return new ObjectArray();
	}
}

ObjectArray.prototype.push = function () {
	var ids = [];
	var i;

	for (var x = 0; x < arguments.length; x++) {
		i = id();
		this[i] = arguments[x];
		ids.push(i);
	}
	
	return ids;
};

ObjectArray.prototype.pop = function () {
	var ks = keys(this);
	var k = ks[ks.length -1];
	var o = this[k];
	
	delete this[k];

	return o;
};

ObjectArray.prototype.shift = function () {
	var ks = keys(this);
	var k = ks[0];
	var o = this[k];
	
	delete this[k];

	return o;
};

ObjectArray.prototype.map = function (fn) {
	var self = this;
	var ks = keys(self);
	var result = [];
	
	ks.forEach(function (k) {
		result.push(fn(self[k], k, self)); 
	});
	
	return result;
};

ObjectArray.prototype.filter = function (fn) {
	var self = this;
	var ks = keys(self);
	var result = [];
	
	ks.forEach(function (k) {
		var o = self[k];
		
		if (fn(o, k, self)) {
			result.push(o);
		}
	});
	
	return result;
};

ObjectArray.prototype.forEach = function (fn) {
	var self = this;
	var ks = keys(self);
	
	ks.forEach(function (k) {
		var o = self[k];
		
		fn(o, k, self);
	});
};

ObjectArray.prototype.indexOf = function (o, f) {
	var self = this;
	var ks = keys(self);
	var k;
	
	f = f || 0;
	
	for (var x = f; x < ks.length; x ++) {
		k = ks[x];
		
		if (this[k] === o) {
			return x;
		}
	}
	
	return -1;
};

ObjectArray.prototype.length = function () {
	return keys(this).length;
};

function id() {
	return uuid().replace(/-/gi,'');
}
