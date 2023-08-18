import Graph, { VertexDescriptor } from "./Graph";

const vertices = <G, V, E>(g: Graph<G, V, E>): VertexDescriptor[] =>
  Array.from(g.vertices.keys());
export default vertices;
