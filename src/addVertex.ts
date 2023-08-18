import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
import createId from "./createId";

const createVD = (): VertexDescriptor => ({
  for: "vertex",
  identifier: createId(),
});

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
