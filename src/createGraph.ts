import DirectedGraph from "./DirectedGraph";
import Graph from "./Graph";
import UndirectedGraph from "./UndirectedGraph";

const createGraph = <GraphType, VertexType, EdgeType>(
  data: GraphType,
  directed: boolean
): Graph<GraphType, VertexType, EdgeType> => {
  return directed
    ? new DirectedGraph<GraphType, VertexType, EdgeType>(data)
    : new UndirectedGraph<GraphType, VertexType, EdgeType>(data);
};

export default createGraph;
