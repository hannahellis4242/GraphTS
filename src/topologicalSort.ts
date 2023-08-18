import Graph, { VertexDescriptor } from "./Graph";
import inDegree from "./InDegree";
import clone from "./clone";
import inEdges from "./inEdges";
import outDegree from "./outDegree";
import removeVertex from "./removeVertex";
import vertices from "./vertices";

const topologiacalSort = <G, V, E>(g: Graph<G, V, E>): VertexDescriptor[] => {
  const graphVertices = vertices(g);
  if (graphVertices.length === 0) {
    return [];
  }
  const next = graphVertices.find((vertex) => inDegree(vertex, g) === 0);
  if (!next) {
    throw new Error("Graph contains a cycle");
  }
  const nextGraph = removeVertex(next, g);
  return [next].concat(topologiacalSort(nextGraph));
};
