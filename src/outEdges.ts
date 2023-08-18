import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";

const outEdges = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): EdgeDescriptor[] =>
  Array.from(g.edges.entries())
    .filter(([_, { source }]) => source === v)
    .map(([descriptor, _]) => descriptor);
export default outEdges;
