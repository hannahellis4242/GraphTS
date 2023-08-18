import Graph, { VertexDescriptor } from "./Graph";
import inEdges from "./inEdges";
("./outEdges");

const inDegree = <G, V, T>(v: VertexDescriptor, g: Graph<G, V, T>): number =>
  inEdges(v, g).length;
export default inDegree;
