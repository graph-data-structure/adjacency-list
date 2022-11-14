import Vertex from './Vertex.js';
import Edge from './Edge.js';

/**
 * Complexity of each update operation in comments for
 * a classical Doubly Linked List implementation.
 */

export default function MultiGraph ( List ) {

	/**
	 * O(1)
	 */
	const Graph = function ( ) {

		this.V = new List( ) ;
		this.E = new List( ) ;

	} ;

	/**
	 * O(1)
	 */
	Graph.prototype.vadd = function ( ) {

		const v = new Vertex( new List( ) ) ;

		v.iterator = this.V.push( v ) ;

		return v ;

	} ;

	/**
	 * O(n) where n is the degree of v
	 */
	Graph.prototype.vdel = function ( v ) {

		// remove all incident edges
		for ( let e of this.iitr( v ) ) this.edel( e ) ;

		// remove vertex
		this.V.erase( v.iterator ) ;

	} ;

	/**
	 * O(1)
	 */
	Graph.prototype.eadd = function ( u , v ) {

		const e = new Edge( u , v ) ;

		// add to edge list
		e.iterator = this.E.push( e ) ;

		// add to edge list of u
		e.uiterator = u.E.push( e ) ;

		// add to edge list of v if u !== v
		if ( u !== v ) e.viterator = v.E.push( e ) ;

		return e ;

	} ;

	/**
	 * O(1)
	 */
	Graph.prototype.edel = function ( e ) {

		// remove from edge list
		this.E.erase( e.iterator ) ;

		// remove from edge list of u
		e.u.E.erase( e.uiterator ) ;

		// remove from edge list of v if u !== v
		if ( e.u !== e.v ) e.v.E.erase( e.viterator ) ;

	} ;


	Graph.prototype.vitr = function* ( ) {

		yield* this.V ;

	} ;

	Graph.prototype.eitr = function* ( ) {

		yield* this.E ;

	} ;

	Graph.prototype.iitr = function* ( v ) {

		yield* v.E ;

	} ;

	Graph.prototype.initr = Graph.prototype.iitr ;
	Graph.prototype.outitr = Graph.prototype.iitr ;

	Graph.prototype.nitr = function* ( w ) {

		for ( let { u , v } of w.E ) yield u === w ? v : u ;

	} ;

	Graph.prototype.dsitr = Graph.prototype.nitr ;
	Graph.prototype.dpitr = Graph.prototype.nitr ;

	Graph.prototype.vertices = Graph.prototype.vitr ;

	Graph.prototype.edges = function* ( ) {

		for ( let e of this.eitr( ) ) yield [ e.u , e.v , e ] ;

	} ;

	Graph.prototype.incident = function* ( v ) {

		for ( let e of this.iitr( v ) ) yield [ e.u , e.v , e ] ;

	} ;

	Graph.prototype.ingoing = function* ( v ) {

		for ( let e of this.initr( v ) ) yield [ e.u === v ? e.v : e.u , v , e ] ;

	} ;

	Graph.prototype.outgoing = function* ( v ) {

		for ( let e of this.outitr( v ) ) yield [ v , e.u === v ? e.v : e.u , e ] ;

	} ;

	Graph.prototype.endpoints = function ( e ) {

		return [ e.u , e.v ] ;

	} ;

	/**
	 * O(1)
	 */
	Graph.prototype.reverse = function ( ) { } ;

	return Graph ;

}
