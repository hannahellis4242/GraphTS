import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
declare const topologicalSort: <G, V, E>(g: Graph<G, V, E>) => VertexDescriptor[];
export default topologicalSort;
