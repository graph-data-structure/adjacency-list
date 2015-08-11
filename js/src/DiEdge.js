
const DiEdge = function ( u , v , list ) {

	this.u = u ;
	this.v = v ;
	this.ref = null ;
	this.twin = null ;
	this.iterator = null ;
	this.list = list ;

} ;

exports.DiEdge = DiEdge ;
