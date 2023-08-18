import { v4 } from "uuid";
import Graph, { VertexDescriptor } from "./Graph";

const createVD = (): VertexDescriptor => ({ for: "vertex", identifier: v4() });

const addVertex = <G, V, E>(
  vertex: V,
  graph: Graph<G, V, E>,
  descriptorToUse?: VertexDescriptor
): VertexDescriptor => {
  const descriptor = descriptorToUse || createVD();
  graph.vertices.set(descriptor, vertex);
  return descriptor;
};
export default addVertex;
