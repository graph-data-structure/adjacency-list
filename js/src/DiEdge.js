
const DiEdge = function ( u , v , list ) {

	this.u = u ;
	this.v = v ;
	this.iterator = null ;
	this.twin = null ;
	this.list = list ;

} ;

exports.DiEdge = DiEdge ;
