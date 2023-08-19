import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
declare const outDegree: <G, V, T>(v: VertexDescriptor, g: Graph<G, V, T>) => number;
export default outDegree;
