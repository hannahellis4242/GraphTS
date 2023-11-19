import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
import outEdges from "./outEdges";
import source from "./source";
import target from "./target";

const getVerices = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): VertexDescriptor[] =>
  g.directed
    ? outEdges(v, g)
        .map((edge) => target(edge, g))
        .map((vertex) => vertex!)
    : outEdges(v, g)
        .flatMap((edge) => [source(edge, g), target(edge, g)])
        .filter((vertex) => vertex !== v)
        .map((vertex) => vertex!);

const adjacentVertices = <G, V, T>(
  v: VertexDescriptor,
  g: Graph<G, V, T>
): VertexDescriptor[] =>
  getVerices(v, g).reduce<VertexDescriptor[]>(
    (unique, vertex) =>
      unique.includes(vertex) ? unique : [...unique, vertex],
    []
  );

export default adjacentVertices;
