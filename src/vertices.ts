import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";

const vertices = <G, V, E>(g: Graph<G, V, E>): VertexDescriptor[] =>
  Array.from(g.vertices.keys());
export default vertices;
