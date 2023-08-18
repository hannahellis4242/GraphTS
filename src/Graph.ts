import EdgeDescriptor from "./EdgeDescriptor";
import VertexDescriptor from "./VertexDescriptor";

export default class Graph<GraphType, VertexType, EdgeType> {
  vertices: Map<VertexDescriptor, VertexType>;
  edges: Map<
    EdgeDescriptor,
    { source: VertexDescriptor; target: VertexDescriptor; data: EdgeType }
  >;
  constructor(
    public readonly data: GraphType,
    public readonly directed: boolean
  ) {
    this.vertices = new Map();
    this.edges = new Map();
  }

  getGraphData() {
    return this.data;
  }
  getVertexData(v: VertexDescriptor) {
    return this.vertices.get(v);
  }
  getEdgeData(e: EdgeDescriptor) {
    const found = this.edges.get(e);
    return found ? found.data : undefined;
  }
}
