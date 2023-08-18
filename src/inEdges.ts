import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";

const inEdges = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): EdgeDescriptor[] =>
  Array.from(g.edges.entries())
    .filter(([_, { target }]) => target === v)
    .map(([descriptor, _]) => descriptor);
export default inEdges;
