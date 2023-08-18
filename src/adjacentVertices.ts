import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
import outEdges from "./outEdges";
import target from "./target";

const adjacentVertices = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): VertexDescriptor[] =>
  outEdges(v, g)
    .map((e) => target(e, g))
    .map((e) => e!);
export default adjacentVertices;
