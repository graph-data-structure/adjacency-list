import test from 'ava';
import * as adjacencylist from '../../src';

import dll from "@aureooms/js-dll" ;

import spec from "@aureooms/js-graph-spec" ;

spec.MultiGraph( "MultiGraph" , adjacencylist.MultiGraph( dll.DoublyLinkedList ) ) ;
spec.MultiDiGraph( "MultiDiGraph" , adjacencylist.MultiDiGraph( dll.DoublyLinkedList , Map ) ) ;
