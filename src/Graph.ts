import { v4 } from "uuid";

export interface VertexDescriptor {
  for: "vertex";
  identifier: string;
}
export interface EdgeDescirptor {
  for: "edge";
  identifier: string;
}

const createVD = (): VertexDescriptor => ({ for: "vertex", identifier: v4() });
const createED = (): EdgeDescirptor => ({ for: "edge", identifier: v4() });

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

  addVertex(
    data: VertexType,
    descriptorToUse?: VertexDescriptor
  ): VertexDescriptor {
    const descriptor = descriptorToUse || createVD();
    this.vertices.set(descriptor, data);
    return descriptor;
  }

  addEdge(
    source: VertexDescriptor,
    target: VertexDescriptor,
    data: EdgeType,
    descriptorToUse?: EdgeDescirptor
  ): EdgeDescirptor {
    const descriptor = descriptorToUse || createED();
    this.edges.set(descriptor, { source, target, data });
    return descriptor;
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
