import EdgeDescriptor from "./EdgeDescriptor";
import VertexDescriptor from "./VertexDescriptor";
export default class Graph<GraphType, VertexType, EdgeType> {
    readonly data: GraphType;
    readonly directed: boolean;
    vertices: Map<VertexDescriptor, VertexType>;
    edges: Map<EdgeDescriptor, {
        source: VertexDescriptor;
        target: VertexDescriptor;
        data: EdgeType;
    }>;
    constructor(data: GraphType, directed: boolean);
    getGraphData(): GraphType;
    getVertexData(v: VertexDescriptor): VertexType | undefined;
    getEdgeData(e: EdgeDescriptor): EdgeType | undefined;
}
