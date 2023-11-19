"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DirectedGraph {
    constructor(data) {
        this.data = data;
        this.directed = true;
        this.vertices = new Map();
        this.edges = new Map();
    }
    getGraphData() {
        return this.data;
    }
    getVertexData(v) {
        return this.vertices.get(v);
    }
    getEdgeData(e) {
        const found = this.edges.get(e);
        return found ? found.data : undefined;
    }
}
exports.default = DirectedGraph;
