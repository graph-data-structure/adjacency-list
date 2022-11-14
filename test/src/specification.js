import test from 'ava';

import {DoublyLinkedList} from '@list-abstraction/doubly-linked-list';
import * as spec from '@graph-data-structure/specification';
import {MultiGraph, MultiDiGraph} from '#module';

// eslint-disable-next-line new-cap
spec.multiGraph(test, 'MultiGraph', MultiGraph(DoublyLinkedList));
// eslint-disable-next-line new-cap
spec.multiDigraph(test, 'MultiDiGraph', MultiDiGraph(DoublyLinkedList, Map));
