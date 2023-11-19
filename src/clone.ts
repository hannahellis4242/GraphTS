import Graph from "./Graph";
import addVertex from "./addVertex";
import addEdge from "./addEdge";
import createGraph from "./createGraph";

const clone = <G, V, E>(g: Graph<G, V, E>): Graph<G, V, E> => {
  const ng = createGraph<G, V, E>(g.data, g.directed);
  Array.from(g.vertices.entries()).forEach(([descriptor, data]) =>
    addVertex(data, ng, descriptor)
  );
  Array.from(g.edges.entries()).forEach(
    ([descriptor, { source, target, data }]) =>
      addEdge(source, target, data, ng, descriptor)
  );
  return ng;
};
export default clone;
