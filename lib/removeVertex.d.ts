import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
declare const removeVertex: <G, V, E>(v: VertexDescriptor, g: Graph<G, V, E>) => Graph<G, V, E>;
export default removeVertex;
