import chai from 'chai';
var assert = chai.assert;

import {empty, each} from '../index.js';

// Test the each() function
describe('each()', function() {
  
  describe('Array', function() {
    var a = [
      1,
      'a',
      { 'a': 'a', 1: 1 },
      function() {}
    ];
    each(a, function(index, value) {
      it('Should return the item in the array', function() {
        assert.equal(a[index], value);
      });
    });
  });
  
  describe('Object', function() {
    var a = {
      1: 1,
      'a': 'a',
      'b': { 'a': 'a', 1: 1 },
      'c': function() {}
    };
    each(a, function(index, value) {
      it('Should return the item in the object', function() {
        assert.equal(a[index], value);
      });
    });
  });
  
});

// Test the empty() function
describe('empty()', function() {
  
  describe('Returns false', function() {
    
    it('empty(false)', function() {
      assert.isFalse(empty(false));
    });
    
    it('empty(true)', function() {
      assert.isFalse(empty(true));
    });
    
    it('empty(0)', function() {
      assert.isFalse(empty(0));
    });
    
    it('empty(1)', function() {
      assert.isFalse(empty(1));
    });    
    
    it('empty(-1)', function() {
      assert.isFalse(empty(-1));
    });    
    
    it("empty(' ')", function() {
      assert.isFalse(empty(' '));
    });    
    
    it("empty('test')", function() {
      assert.isFalse(empty('test'));
    });    
    
    it('empty([0])', function() {
      assert.isFalse(empty([0]));
    });    
    
    it("empty([''])", function() {
      assert.isFalse(empty(['']));
    });    
    
    it("empty(['a','a'])", function() {
      assert.isFalse(empty(['a','a']));
    });    
    
    it("empty({'':''})", function() {
      assert.isFalse(empty({'':''}));
    });    
    
    it("empty({'a':'a'})", function() {
      assert.isFalse(empty({'a':'a'}));
    });    
    
    it('empty(new Object(false))', function() {
      assert.isFalse(empty(new Object(false)));
    });    
    
    it('empty(new Object(true))', function() {
      assert.isFalse(empty(new Object(true)));
    });    
    
    it('empty(new Object(0))', function() {
      assert.isFalse(empty(new Object(0)));
    });    
    
    it('empty(new Set([0]))', function() {
      assert.isFalse(empty(new Set([0])));
    });    
    
    it("empty(new Map([['a', 1]]))", function() {
      assert.isFalse(empty(new Map([['a', 1]])));
    });    
    
    it('empty(new WeakMap().set({}, 1))', function() {
      assert.isFalse(empty(new WeakMap().set({}, 1)));
    });    
    
    it('empty(() => {})', function() {
      assert.isFalse(empty(() => {}));
    });    
    
    it('empty(new RegExp())', function() {
      assert.isFalse(empty(new RegExp()));
    });    
    
    it('empty(/ /)', function() {
      assert.isFalse(empty(/ /));
    });    
    
    it('empty(/test/)', function() {
      assert.isFalse(empty(/test/));
    });    
    
    it("var a = function () { return 'test' }; empty(a)", function() {
      var a = function () { return 'test' }
      assert.isFalse(empty(a));
    });    
    
    it("var a = function () { return '' }; empty(a)", function() {
      var a = function () { return '' }
      assert.isFalse(empty(a));
    });    
    
  });
  
  describe('Returns true', function() {
    it('var a; empty(a)', function() {
      var a;
      assert.isTrue(empty(a));
    });
    
    it('empty({})', function() {
      assert.isTrue(empty({}));
    });
    
    it('empty([])', function() {
      assert.isTrue(empty([]));
    });
    
    it("empty('')", function() {
      assert.isTrue(empty(''));
    });
    
    it("var a = {'a':''}; empty(a.a)", function() {
      var a = {'a':''};
      assert.isTrue(empty(a.a));
    });
    
    it("var a = {'a':''}; empty(a.a.a)", function() {
      var a = {'a':''};
      assert.isTrue(empty(a.a.a));
    });
    
    it("var a = ['']; empty(a[0])", function() {
      var a = [''];
      assert.isTrue(empty(a[0]));
    });
    
    it("empty(new Object(''))", function() {
      assert.isTrue(empty(new Object('')));
    });
    
    it('empty(null)', function() {
      assert.isTrue(empty(null));
    });
    
    it('empty(undefined)', function() {
      assert.isTrue(empty(undefined));
    });
    
    it('empty(NaN)', function() {
      assert.isTrue(empty(NaN));
    });
    
    it("empty(parseInt(''))", function() {
      assert.isTrue(empty(parseInt('')));
    });
    
    it('var a = //; empty(a)', function() {
      var a = //;
      assert.isTrue(empty(a));
    });
    
    it('empty(new Set())', function() {
      assert.isTrue(empty(new Set()));
    });
    
    it('empty(new Set([]))', function() {
      assert.isTrue(empty(new Set([])));
    });
    
    it('empty(new Map())', function() {
      assert.isTrue(empty(new Map()));
    });
    
    it('empty(new Map([]))', function() {
      assert.isTrue(empty(new Map([])));
    });
  });
  
});