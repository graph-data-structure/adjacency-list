
var dll = require( "aureooms-js-dll" ) ;

var spec = require( "aureooms-js-graph-spec" ) ;

spec.MultiGraph( "MultiGraph" , adjacencylist.MultiGraph( dll.DoublyLinkedList ) ) ;
spec.MultiDiGraph( "MultiDiGraph" , adjacencylist.MultiDiGraph( dll.DoublyLinkedList , Map ) ) ;
