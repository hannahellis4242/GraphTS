import Graph from "./Graph";
import addVertex from "./addVertex";
import addEdge from "./addEdge";

const clone = <G, V, E>(g: Graph<G, V, E>): Graph<G, V, E> => {
  const ng = new Graph<G, V, E>(g.data, g.directed);
  Array.from(g.vertices.entries()).forEach(([desciptor, data]) =>
    addVertex(data, ng, desciptor)
  );
  Array.from(g.edges.entries()).forEach(
    ([descriptor, { source, target, data }]) =>
      addEdge(source, target, data, ng, descriptor)
  );
  return ng;
};
export default clone;
