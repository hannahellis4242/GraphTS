import EdgeDescriptor from "./EdgeDescriptor";
import VertexDescriptor from "./VertexDescriptor";
export interface EdgeData<EdgeType> {
    source: VertexDescriptor;
    target: VertexDescriptor;
    data: EdgeType;
}
export type VertexMap<VertexType> = Map<VertexDescriptor, VertexType>;
export type EdgeMap<EdgeType> = Map<EdgeDescriptor, EdgeData<EdgeType>>;
export default interface Graph<GraphType, VertexType, EdgeType> {
    readonly directed: boolean;
    readonly data: GraphType;
    vertices: VertexMap<VertexType>;
    edges: EdgeMap<EdgeType>;
    getGraphData(): GraphType;
    getVertexData(v: VertexDescriptor): VertexType | undefined;
    getEdgeData(e: EdgeDescriptor): EdgeType | undefined;
}
