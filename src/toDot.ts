import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import UndirectedGraph from "./UndirectedGraph";
import VertexDescriptor from "./VertexDescriptor";
import edges from "./edges";
import source from "./source";
import target from "./target";
import vertices from "./vertices";

export interface DotWriter<G, V, E> {
  writeGraph(): string;
  writeVertex(v: VertexDescriptor): string;
  writeEdge(e: EdgeDescriptor): string;
}

const toDot = <G, V, E>(
  graph: Graph<G, V, E>,
  writer: DotWriter<G, V, E>
): string => {
  const graphType = graph instanceof UndirectedGraph ? "graph" : "digraph";
  const symbol = graph instanceof UndirectedGraph ? "--" : "->";

  let vertexCounter = 1;
  const vertexToLabelMap = new Map<VertexDescriptor, number>();

  let output = graphType + " name {\n";
  output += writer.writeGraph() + "\n";

  vertices(graph).forEach((vertex) => {
    const label = vertexCounter++;
    vertexToLabelMap.set(vertex, label);
    output += `${label} ${writer.writeVertex(vertex)};\n`;
  });

  edges(graph).forEach((edge) => {
    const s = source(edge, graph);
    const t = target(edge, graph);
    if (!s || !t) {
      return;
    }
    const sourceLabel = vertexToLabelMap.get(s);
    const targetLabel = vertexToLabelMap.get(t);
    if (!sourceLabel || !sourceLabel) {
      return;
    }
    output += `${sourceLabel} ${symbol} ${targetLabel} ${writer.writeEdge(
      edge
    )};\n`;
  });
  output += "}";
  return output;
};

export default toDot;
