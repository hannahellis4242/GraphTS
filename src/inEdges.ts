import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
import edges from "./edges";

const inEdges = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): EdgeDescriptor[] =>
  g.directed
    ? Array.from(g.edges.entries())
        .filter(([_, { target }]) => target === v)
        .map(([descriptor, _]) => descriptor)
    : Array.from(g.edges.entries())
        .filter(([_, { source, target }]) => source === v || target === v)
        .map(([descriptor, _]) => descriptor);
export default inEdges;
