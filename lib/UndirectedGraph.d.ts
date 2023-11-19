import EdgeDescriptor from "./EdgeDescriptor";
import Graph, { VertexMap, EdgeMap } from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
export default class UndirectedGraph<GraphType, VertexType, EdgeType> implements Graph<GraphType, VertexType, EdgeType> {
    readonly data: GraphType;
    readonly directed: boolean;
    vertices: VertexMap<VertexType>;
    edges: EdgeMap<EdgeType>;
    constructor(data: GraphType);
    getGraphData(): GraphType;
    getVertexData(v: VertexDescriptor): VertexType | undefined;
    getEdgeData(e: EdgeDescriptor): EdgeType | undefined;
}
