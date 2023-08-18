import Graph, { VertexDescriptor } from "./Graph";
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
