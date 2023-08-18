import Graph, { EdgeDescirptor, VertexDescriptor } from "./Graph";

const outEdges = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): EdgeDescirptor[] =>
  Array.from(g.edges.entries())
    .filter(([_, { source }]) => source === v)
    .map(([descriptor, _]) => descriptor);
export default outEdges;
