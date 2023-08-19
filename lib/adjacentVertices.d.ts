import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
declare const adjacentVertices: <G, V, T>(v: VertexDescriptor, g: Graph<G, V, T>) => VertexDescriptor[];
export default adjacentVertices;
