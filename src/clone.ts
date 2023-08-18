import Graph from "./Graph";

const clone = <G, V, E>(g: Graph<G, V, E>): Graph<G, V, E> => {
  const ng = new Graph<G, V, E>(g.data, g.directed);
  Array.from(g.vertices.entries()).forEach(([desciptor, data]) =>
    ng.addVertex(data, desciptor)
  );
  Array.from(g.edges.entries()).forEach(
    ([descriptor, { source, target, data }]) =>
      ng.addEdge(source, target, data, descriptor)
  );
  return ng;
};
export default clone;
