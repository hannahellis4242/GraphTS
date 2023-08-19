import Graph from "./Graph";
import EdgeDescriptor from "./EdgeDescriptor";
import VertexDescriptor from "./VertexDescriptor";
declare const addEdge: <G, V, E>(source: VertexDescriptor, target: VertexDescriptor, data: E, graph: Graph<G, V, E>, descriptorToUse?: EdgeDescriptor) => EdgeDescriptor;
export default addEdge;
