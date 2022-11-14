import test from 'ava';
import {MultiGraph, MultiDiGraph} from '../../src';

import {DoublyLinkedList} from '@list-abstraction/doubly-linked-list';
import * as spec from '@graph-data-structure/specification';

spec.multiGraph( test, "MultiGraph" , MultiGraph( DoublyLinkedList ) ) ;
spec.multiDigraph( test, "MultiDiGraph" , MultiDiGraph( DoublyLinkedList , Map ) ) ;
