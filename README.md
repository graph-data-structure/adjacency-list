[@graph-data-structure/adjacency-list](https://graph-data-structure.github.io/adjacency-list)
==

Adjacency list code bricks for JavaScript.
Follows the specification in
[@graph-data-structure/specification](https://github.com/graph-data-structure/specification).
Parent is [@aureooms/js-gn](https://github.com/make-github-pseudonymous-again/js-gn).

```js
for ( let v of V( G ) ) ... ;
```

[![License](https://img.shields.io/github/license/graph-data-structure/adjacency-list.svg)](https://raw.githubusercontent.com/graph-data-structure/adjacency-list/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@graph-data-structure/adjacency-list.svg)](https://www.npmjs.org/package/@graph-data-structure/adjacency-list)
[![Build](https://img.shields.io/travis/graph-data-structure/specification/main.svg)](https://travis-ci.com/graph-data-structure/specification/branches)
[![Dependencies](https://img.shields.io/librariesio/github/graph-data-structure/adjacency-list.svg)](https://github.com/graph-data-structure/adjacency-list/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/graph-data-structure/adjacency-list.svg)](https://github.com/graph-data-structure/adjacency-list/issues)
[![Downloads](https://img.shields.io/npm/dm/@graph-data-structure/adjacency-list.svg)](https://www.npmjs.org/package/@graph-data-structure/adjacency-list)

[![Code issues](https://img.shields.io/codeclimate/issues/graph-data-structure/adjacency-list.svg)](https://codeclimate.com/github/graph-data-structure/adjacency-list/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/graph-data-structure/adjacency-list.svg)](https://codeclimate.com/github/graph-data-structure/adjacency-list/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/graph-data-structure/adjacency-list/main.svg)](https://codecov.io/gh/graph-data-structure/adjacency-list)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/graph-data-structure/adjacency-list.svg)](https://codeclimate.com/github/graph-data-structure/adjacency-list/trends/technical_debt)
[![Documentation](https://graph-data-structure.github.io/adjacency-list/badge.svg)](https://graph-data-structure.github.io/adjacency-list/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@graph-data-structure/adjacency-list)](https://bundlephobia.com/result?p=@graph-data-structure/adjacency-list)


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
