import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
declare const target: <G, V, T>(e: EdgeDescriptor, g: Graph<G, V, T>) => VertexDescriptor | undefined;
export default target;
