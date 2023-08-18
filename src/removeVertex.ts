import Graph, { VertexDescriptor } from "./Graph";

const removeVertex = <G, V, E>(
  v: VertexDescriptor,
  g: Graph<G, V, E>
): Graph<G, V, E> => {
  const ng = new Graph<G, V, E>(g.data, g.directed);
  Array.from(g.vertices.entries())
    .filter(([desciptor, _]) => {
      desciptor !== v;
    })
    .forEach(([desciptor, data]) => ng.addVertex(data, desciptor));
  Array.from(g.edges.entries())
    .filter(([_, { source }]) => source !== v)
    .filter(([_, { target }]) => target !== v)
    .forEach(([descriptor, { source, target, data }]) =>
      ng.addEdge(source, target, data, descriptor)
    );
  return ng;
};
export default removeVertex;
