import Graph, { EdgeDescirptor, VertexDescriptor } from "./Graph";

const source = <G, V, T>(
  e: EdgeDescirptor,
  g: Graph<G, V, T>
): VertexDescriptor | undefined => {
  const found = g.edges.get(e);
  return found ? found.source : undefined;
};

export default source;
