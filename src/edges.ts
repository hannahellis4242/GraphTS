import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";

const edges = <G, V, E>(g: Graph<G, V, E>): EdgeDescriptor[] =>
  Array.from(g.edges.keys());

export default edges;
