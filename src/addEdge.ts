import { v4 } from "uuid";
import Graph from "./Graph";
import EdgeDescriptor from "./EdgeDescriptor";
import VertexDescriptor from "./VertexDescriptor";

const createED = (): EdgeDescriptor => ({ for: "edge", identifier: v4() });

const addEdge = <G, V, E>(
  source: VertexDescriptor,
  target: VertexDescriptor,
  data: E,
  graph: Graph<G, V, E>,
  descriptorToUse?: EdgeDescriptor
): EdgeDescriptor => {
  const descriptor = descriptorToUse || createED();
  graph.edges.set(descriptor, { source, target, data });
  return descriptor;
};
export default addEdge;
