import EdgeDescriptor from "./EdgeDescriptor";
import Graph from "./Graph";
import VertexDescriptor from "./VertexDescriptor";
export interface DotWriter<G, V, E> {
    writeGraph(): string;
    writeVertex(v: VertexDescriptor): string;
    writeEdge(e: EdgeDescriptor): string;
}
declare const toDot: <G, V, E>(graph: Graph<G, V, E>, writer: DotWriter<G, V, E>) => string;
export default toDot;
