import DirectedGraph from "./DirectedGraph";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
import inDegree from "./inDegree";
import removeVertex from "./removeVertex";
import vertices from "./vertices";

const topologicalSort = <G, V, E>(g: Graph<G, V, E>): VertexDescriptor[] => {
  if (!(g instanceof DirectedGraph)) {
    return [];
  }
  const graphVertices = vertices(g);
  if (graphVertices.length === 0) {
    return [];
  }
  const next = graphVertices.find((vertex) => inDegree(vertex, g) === 0);
  if (!next) {
    throw new Error("Graph contains a cycle");
  }
  const nextGraph = removeVertex(next, g);
  return [next].concat(topologicalSort(nextGraph));
};
export default topologicalSort;
