import Graph, { EdgeDescirptor, VertexDescriptor } from "./Graph";
import outEdges from "./outEdges";

const outDegree = <G, V, T>(v: VertexDescriptor, g: Graph<G, V, T>): number =>
  outEdges(v, g).length;
export default outDegree;
