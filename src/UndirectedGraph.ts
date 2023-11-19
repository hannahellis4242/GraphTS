import EdgeDescriptor from "./EdgeDescriptor";
import Graph, { VertexMap, EdgeMap } from "./Graph";
import VertexDescriptor from "./VertexDescriptor";

export default class UndirectedGraph<GraphType, VertexType, EdgeType>
  implements Graph<GraphType, VertexType, EdgeType>
{
  readonly directed: boolean = false;
  vertices: VertexMap<VertexType>;
  edges: EdgeMap<EdgeType>;

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
