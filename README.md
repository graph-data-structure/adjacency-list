[@aureooms/js-adjacency-list](https://make-github-pseudonymous-again.github.io/js-adjacency-list)
==

Adjacency list code bricks for JavaScript.
Follows the specification in
[@aureooms/js-graph-spec](https://github.com/make-github-pseudonymous-again/js-graph-spec).
Parent is [@aureooms/js-gn](https://github.com/make-github-pseudonymous-again/js-gn).

```js
for ( let v of V( G ) ) ... ;
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-adjacency-list.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-adjacency-list/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-adjacency-list.svg)](https://www.npmjs.org/package/@aureooms/js-adjacency-list)
[![Tests](https://img.shields.io/github/workflow/status/make-github-pseudonymous-again/js-adjacency-list/ci:cover?event=push&label=tests)](https://github.com/make-github-pseudonymous-again/js-adjacency-list/actions/workflows/ci:cover.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/make-github-pseudonymous-again/js-adjacency-list.svg)](https://github.com/make-github-pseudonymous-again/js-adjacency-list/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-adjacency-list.svg)](https://github.com/make-github-pseudonymous-again/js-adjacency-list/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-adjacency-list.svg)](https://www.npmjs.org/package/@aureooms/js-adjacency-list)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-adjacency-list.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-adjacency-list/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-adjacency-list.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-adjacency-list/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-adjacency-list/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-adjacency-list)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-adjacency-list.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-adjacency-list/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-adjacency-list//badge.svg)](https://make-github-pseudonymous-again.github.io/js-adjacency-list//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-adjacency-list)](https://bundlephobia.com/result?p=@aureooms/js-adjacency-list)

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
import {DoublyLinkedList as List} from '@list-abstraction/doubly-linked-list';
import {MultiGraph, MultiDiGraph} from '@graph-data-structure/adjacency-list';

let MultiGraph = MultiGraph( List ) ;
// use `MultiDiGraph( List , Map )` for directed multigraphs ;
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
