import Graph, { EdgeDescirptor, VertexDescriptor } from "./Graph";

const target = <G, V, T>(
  e: EdgeDescirptor,
  g: Graph<G, V, T>
): VertexDescriptor | undefined => {
  const found = g.edges.get(e);
  return found ? found.target : undefined;
};

export default target;
