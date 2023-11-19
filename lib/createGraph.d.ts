import Graph from "./Graph";
declare const createGraph: <GraphType, VertexType, EdgeType>(data: GraphType, directed: boolean) => Graph<GraphType, VertexType, EdgeType>;
export default createGraph;
