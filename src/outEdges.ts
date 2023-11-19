import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
import inEdges from "./inEdges";

const outEdges = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): EdgeDescriptor[] =>
  g.directed
    ? Array.from(g.edges.entries())
        .filter(([_, { source }]) => source === v)
        .map(([descriptor, _]) => descriptor)
    : inEdges(v, g);
export default outEdges;
