
const List = function ( DLL ) {

	const Graph = function ( ) {

		this.V = new DLL( ) ;
		this.E = new DLL( ) ;

	} ;

	Graph.prototype.vadd = function ( ) {

		const v = new Vertex( new DLL( ) ) ;

		v.iterator = this.V.push( v ) ;

		return v ;

	} ;

	Graph.prototype.vdel = function ( v ) {

		// remove all incident edges
		for ( let e of this.eitr( v ) ) this.edel( e ) ;

		// remove vertex
		this.E.erase( v.iterator ) ;

	} ;

	Graph.prototype.eadd = function ( u , v ) {

		const e = new Edge( u , v ) ;

		// add to edge list
		e.iterator = this.E.push( e ) ;

		// add to edge list of u
		e.uiterator = u.E.push( e ) ;

		// add to edge list of v
		e.viterator = v.E.push( e ) ;

		return e ;

	} ;

	Graph.prototype.edel = function ( e ) {

		// remove from edge list
		this.E.erase( e.iterator ) ;

		// remove from edge list of u
		e.u.E.erase( e.uiterator ) ;

		// remove from edge list of v
		e.v.E.erase( e.viterator ) ;

	} ;


	Graph.prototype.vitr = function* ( ) {

		yield* this.V ;

	} ;

	Graph.prototype.eitr = function* ( v ) {

		yield* v.E ;

	} ;

	Graph.prototype.aeitr = function* ( ) {

		yield* this.E ;

	} ;

	return Graph ;

} ;

exports.List = List ;
