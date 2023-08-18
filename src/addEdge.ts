import { v4 } from "uuid";
import Graph, { EdgeDescirptor, VertexDescriptor } from "./Graph";

const createED = (): EdgeDescirptor => ({ for: "edge", identifier: v4() });

const addEdge = <G, V, E>(
  source: VertexDescriptor,
  target: VertexDescriptor,
  data: E,
  graph: Graph<G, V, E>,
  descriptorToUse?: EdgeDescirptor
): EdgeDescirptor => {
  const descriptor = descriptorToUse || createED();
  graph.edges.set(descriptor, { source, target, data });
  return descriptor;
};
export default addEdge;
