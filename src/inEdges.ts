import Graph, { EdgeDescirptor, VertexDescriptor } from "./Graph";

const inEdges = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): EdgeDescirptor[] =>
  Array.from(g.edges.entries())
    .filter(([_, { target }]) => target === v)
    .map(([descriptor, _]) => descriptor);
export default inEdges;
