import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";

const source = <G, V, T>(
  e: EdgeDescriptor,
  g: Graph<G, V, T>
): VertexDescriptor | undefined => {
  const found = g.edges.get(e);
  return found ? found.source : undefined;
};

export default source;
