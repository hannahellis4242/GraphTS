import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
declare const inDegree: <G, V, T>(v: VertexDescriptor, g: Graph<G, V, T>) => number;
export default inDegree;
