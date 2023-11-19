import EdgeDescriptor from "./EdgeDescriptor";
import Graph, { EdgeData } from "./Graph";
import VertexDescriptor from "./VertexDescriptor";

export default class DirectedGraph<GraphType, VertexType, EdgeType>
  implements Graph<GraphType, VertexType, EdgeType>
{
  public readonly directed = true;
  vertices: Map<VertexDescriptor, VertexType>;
  edges: Map<EdgeDescriptor, EdgeData<EdgeType>>;
  constructor(public readonly data: GraphType) {
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
