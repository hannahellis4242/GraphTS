import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";

const target = <G, V, T>(
  e: EdgeDescriptor,
  g: Graph<G, V, T>
): VertexDescriptor | undefined => {
  const found = g.edges.get(e);
  return found ? found.target : undefined;
};

export default target;
