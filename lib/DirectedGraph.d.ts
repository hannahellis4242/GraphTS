import EdgeDescriptor from "./EdgeDescriptor";
import Graph, { EdgeData } from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
export default class DirectedGraph<GraphType, VertexType, EdgeType> implements Graph<GraphType, VertexType, EdgeType> {
    readonly data: GraphType;
    readonly directed = true;
    vertices: Map<VertexDescriptor, VertexType>;
    edges: Map<EdgeDescriptor, EdgeData<EdgeType>>;
    constructor(data: GraphType);
    getGraphData(): GraphType;
    getVertexData(v: VertexDescriptor): VertexType | undefined;
    getEdgeData(e: EdgeDescriptor): EdgeType | undefined;
}
