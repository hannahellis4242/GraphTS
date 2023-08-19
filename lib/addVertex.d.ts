import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
declare const addVertex: <G, V, E>(vertex: V, graph: Graph<G, V, E>, descriptorToUse?: VertexDescriptor) => VertexDescriptor;
export default addVertex;
