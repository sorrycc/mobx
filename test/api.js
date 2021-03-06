var mobx = require('../');
var test = require('tape');

test('correct api should be exposed', function(t) {
	t.deepEquals(Object.keys(mobx).sort(), [
		'Atom',
		'ObservableMap',
		'Reaction',
		'SimpleEventEmitter',
		'_',
		'asFlat',
		'asReference',
		'asStructure',
		'autorun',
		'autorunAsync',
		'autorunUntil',
		'computed',
		'createTransformer',
		'expr',
		'extendObservable',
		'extras',
		'fastArray',
		'isObservable',
		'isObservableArray',
		'isObservableMap',
		'isObservableObject',
		'map',
		'observable',
		'observe',
		'toJSON',
		'transaction',
		'untracked',
		'when'
	]);
	t.equals(Object.keys(mobx).filter(function(key) {
		return mobx[key] == undefined;
	}).length, 0);

	t.deepEquals(Object.keys(mobx._).sort(), [
		'quickDiff',
		'resetGlobalState'
	]);
	t.equals(Object.keys(mobx._).filter(function(key) {
		return mobx._[key] == undefined;
	}).length, 0);

	t.deepEquals(Object.keys(mobx.extras).sort(), [
			'allowStateChanges',
			'getDependencyTree',
			'getObserverTree',
			'isComputingDerivation',
			'resetGlobalState',
			'trackTransitions'
	]);
	t.equals(Object.keys(mobx.extras).filter(function(key) {
		return mobx.extras[key] == undefined;
	}).length, 0);

	t.end();
});