[js-adjacency-list](http://make-github-pseudonymous-again.github.io/js-adjacency-list)
==

Adjacency list code bricks for JavaScript.
Follows the specification in
[js-graph-spec](https://github.com/make-github-pseudonymous-again/js-graph-spec).
Parent is [js-gn](https://github.com/make-github-pseudonymous-again/js-gn).

```js
for ( let v of V( G ) ) ... ;
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-adjacency-list.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-adjacency-list/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-adjacency-list.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-adjacency-list)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-adjacency-list.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-adjacency-list)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-adjacency-list.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-adjacency-list)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-adjacency-list.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-adjacency-list)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-adjacency-list.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-adjacency-list#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-adjacency-list.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-adjacency-list#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-adjacency-list.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-adjacency-list)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-adjacency-list.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-adjacency-list)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-adjacency-list.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-adjacency-list/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-adjacency-list.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-adjacency-list)

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
jspm install npm:@aureooms/js-adjacency-list
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-adjacency-list
```

### bower
```terminal
bower install @aureooms/js-adjacency-list
```

### ender
```terminal
ender add @aureooms/js-adjacency-list
```

### jam
```terminal
jam install @aureooms/js-adjacency-list
```

### spm
```terminal
spm install @aureooms/js-adjacency-list --save
```

### npm
```terminal
npm install @aureooms/js-adjacency-list --save
```

## Require
### jspm
```js
let adjacencylist = require( "github:aureooms/js-adjacency-list" ) ;
// or
import adjacencylist from '@aureooms/js-adjacency-list' ;
```
### duo
```js
let adjacencylist = require( "aureooms/js-adjacency-list" ) ;
```

### component, ender, spm, npm
```js
let adjacencylist = require( "@aureooms/js-adjacency-list" ) ;
```

### bower
The script tag exposes the global variable `adjacencylist`.
```html
<script src="bower_components/@aureooms/js-adjacency-list/js/dist/adjacency-list.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-adjacency-list" ] , function ( adjacencylist ) { ... } ) ;
```

## Use


```js
let dll = require( "@aureooms/js-dll" ) ;
let List = dll.DoublyLinkedList ;

let MultiGraph = adjacencylist.MultiGraph( List ) ;
// use `adjacencylist.MultiDiGraph( List , Map )` for directed multigraphs ;
// (`Map` is the new es6 class, or any other polyfill implementation)

let { V , E , N } = require( "@aureooms/js-graph-theory-notation" ) ;

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
