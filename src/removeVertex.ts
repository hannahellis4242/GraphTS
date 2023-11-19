import Graph from "./Graph";
import addVertex from "./addVertex";
import addEdge from "./addEdge";
import VertexDescriptor from "./VertexDescriptor";
import createGraph from "./createGraph";

const removeVertex = <G, V, E>(
  v: VertexDescriptor,
  g: Graph<G, V, E>
): Graph<G, V, E> => {
  const ng = createGraph<G, V, E>(g.data, g.directed);
  Array.from(g.vertices.entries())
    .filter(([descriptor, _]) => descriptor !== v)
    .forEach(([descriptor, data]) => addVertex(data, ng, descriptor));
  Array.from(g.edges.entries())
    .filter(([_, { source }]) => source !== v)
    .filter(([_, { target }]) => target !== v)
    .forEach(([descriptor, { source, target, data }]) =>
      addEdge(source, target, data, ng, descriptor)
    );
  return ng;
};
export default removeVertex;
