import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
import outEdges from "./outEdges";

const outDegree = <G, V, T>(v: VertexDescriptor, g: Graph<G, V, T>): number =>
  outEdges(v, g).length;
export default outDegree;
