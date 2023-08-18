export interface VertexDescriptor {
  for: "vertex";
  identifier: string;
}
export interface EdgeDescirptor {
  for: "edge";
  identifier: string;
}

export default class Graph<GraphType, VertexType, EdgeType> {
  vertices: Map<VertexDescriptor, VertexType>;
  edges: Map<
    EdgeDescirptor,
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
  getEdgeData(e: EdgeDescirptor) {
    const found = this.edges.get(e);
    return found ? found.data : undefined;
  }
}
