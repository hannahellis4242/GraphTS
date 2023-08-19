import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
declare const inEdges: <G, V, T>(v: VertexDescriptor, g: Graph<G, V, T>) => EdgeDescriptor[];
export default inEdges;
