export default function DiEdge(u, v, list) {
	this.u = u;
	this.v = v;
	this.ref = null;
	this.twin = null;
	this.iterator = null;
	this.list = list;
}
