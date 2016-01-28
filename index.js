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
	for (var x = 0; x < arguments.length; x++) {
		this[id()] = arguments[x];
	}
	
	return this.length();
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

ObjectArray.prototype.length = function () {
	return keys(this).length;
};

function id() {
	return uuid().replace(/-/gi,'');
}
