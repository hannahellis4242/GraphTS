import Graph from "./Graph";
import addVertex from "./addVertex";
import addEdge from "./addEdge";
import VertexDescriptor from "./VertexDescriptor";

const removeVertex = <G, V, E>(
  v: VertexDescriptor,
  g: Graph<G, V, E>
): Graph<G, V, E> => {
  const ng = new Graph<G, V, E>(g.data, g.directed);
  Array.from(g.vertices.entries())
    .filter(([desciptor, _]) => desciptor !== v)
    .forEach(([desciptor, data]) => addVertex(data, ng, desciptor));
  Array.from(g.edges.entries())
    .filter(([_, { source }]) => source !== v)
    .filter(([_, { target }]) => target !== v)
    .forEach(([descriptor, { source, target, data }]) =>
      addEdge(source, target, data, ng, descriptor)
    );
  return ng;
};
export default removeVertex;
