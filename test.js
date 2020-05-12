import {each, empty} from './index.js'

var data = ['a', 'b', 'c'];

each(data, function (index, value) {
  console.log(index, value);
});

console.log(   empty(false)                     ); // False
console.log(   empty(true)                      ); // False
console.log(   empty(0)                         ); // False
console.log(   empty(1)                         ); // False
console.log(   empty(-1)                        ); // False
console.log(   empty(" ")                       ); // False
console.log(   empty("test")                    ); // False
console.log(   empty([0])                       ); // False
console.log(   empty([''])                      ); // False
console.log(   empty(['a','a'])                 ); // False
console.log(   empty({'':''})                   ); // False
console.log(   empty({'a':'a'})                 ); // False
console.log(   empty(new Object(false))         ); // False
console.log(   empty(new Object(true))          ); // False
console.log(   empty(new Object(0))             ); // False
console.log(   empty(new Set([0]))              ); // False
console.log(   empty(new Map([['a', 1]]))       ); // False
console.log(   empty(new WeakMap().set({}, 1))  ); // False
console.log(   empty(() => {})                  ); // False
console.log(   empty(new RegExp())              ); // False
// Regex matching a blank space
console.log(   empty(/ /)                       ); // False
// Regex matching test
console.log(   empty(/test/)                    ); // False
var a = function () { return "test"; }
console.log(   empty(a)                         ); // False
var b = function () { return ""; }
console.log(   empty(b)                         ); // False
var c;
console.log(   empty(c)                         ); // True
console.log(   empty({})                        ); // True
console.log(   empty([])                        ); // True
console.log(   empty("")                        ); // True
var d = {'d':''};
console.log(   empty(d.d)                       ); // True
console.log(   empty(d.d.d)                     ); // True
var e = [''];
console.log(   empty(e[0])                      ); // True
console.log(   empty(new Object(''))            ); // True
console.log(   empty(null)                      ); // True
console.log(   empty(undefined)                 ); // True
console.log(   empty(NaN)                       ); // True
// Will also output NaN
console.log(   empty(parseInt(''))              ); // True
// An empty regex
var f = //;
console.log(   empty(f)                         ); // True
console.log(   empty(new Set())                 ); // True
console.log(   empty(new Set([]))               ); // True
console.log(   empty(new Map())                 ); // True
console.log(   empty(new Map([]))               ); // True