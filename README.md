[js-adjacency-list](http://aureooms.github.io/js-adjacency-list)
==

Adjacency list code bricks for JavaScript. Parent is
[js-gn](http://github.com/aureooms/js-gn).

```js
for ( let e of E( G ) ) ... ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-adjacency-list.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-adjacency-list/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-adjacency-list.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-adjacency-list)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-adjacency-list.svg?style=flat)](http://bower.io/search/?q=aureooms-js-adjacency-list)
[![Build Status](http://img.shields.io/travis/aureooms/js-adjacency-list.svg?style=flat)](https://travis-ci.org/aureooms/js-adjacency-list)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-adjacency-list.svg?style=flat)](https://coveralls.io/r/aureooms/js-adjacency-list)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-adjacency-list.svg?style=flat)](https://david-dm.org/aureooms/js-adjacency-list#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-adjacency-list.svg?style=flat)](https://david-dm.org/aureooms/js-adjacency-list#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-adjacency-list.svg?style=flat)](https://codeclimate.com/github/aureooms/js-adjacency-list)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-adjacency-list.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-adjacency-list)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-adjacency-list.svg?style=flat)](https://github.com/aureooms/js-adjacency-list/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-adjacency-list.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-adjacency-list)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-adjacency-list
# or
jspm install npm:aureooms-js-adjacency-list
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-adjacency-list
```

### bower
```terminal
bower install aureooms-js-adjacency-list
```

### ender
```terminal
ender add aureooms-js-adjacency-list
```

### jam
```terminal
jam install aureooms-js-adjacency-list
```

### spm
```terminal
spm install aureooms-js-adjacency-list --save
```

### npm
```terminal
npm install aureooms-js-adjacency-list --save
```

## Require
### jspm
```js
let adjacencylist = require( "github:aureooms/js-adjacency-list" ) ;
// or
import adjacencylist from 'aureooms-js-adjacency-list' ;
```
### duo
```js
let adjacencylist = require( "aureooms/js-adjacency-list" ) ;
```

### component, ender, spm, npm
```js
let adjacencylist = require( "aureooms-js-adjacency-list" ) ;
```

### bower
The script tag exposes the global variable `adjacencylist`.
```html
<script src="bower_components/aureooms-js-adjacency-list/js/dist/adjacency-list.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-adjacency-list" ] , function ( adjacencylist ) { ... } ) ;
```

## Use


```js
let dll = require( "aureooms-js-dll" ) ;

let Graph = adjacencylist.List( dll.DoublyLinkedList ) ;

let { V , E , N } = require( "aureooms-js-graph-theory-notation" ) ;

let G = new Graph( ) ;

let u = G.vadd( ) ;

let v = G.vadd( ) ;

let e = G.eadd( u , v ) ;

for ( let w of V( G ) ) ... ;

for ( let e of E( G ) ) ... ;

for ( let w of N( G , u ) ) ... ;

G.edel( e ) ;

G.vdel( v ) ;

G.vdel( u ) ;
```
