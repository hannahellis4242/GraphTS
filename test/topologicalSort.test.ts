import DirectedGraph from "../src/DirectedGraph";
import addVertex from "../src/addVertex";
import addEdge from "../src/addEdge";
import topologicalSort from "../src/topologicalSort";
import vertices from "../src/vertices";
import edges from "../src/edges";
describe("topologicalSort", () => {
  test("empty graph", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(0);
  });
  test("single vertex graph", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const vertex = addVertex("A", graph);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(1);
    expect(result).toContain(vertex);
  });
  test("two vertices graph", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const vertex1 = addVertex("A", graph);
    const vertex2 = addVertex("B", graph);
    addEdge(vertex1, vertex2, null, graph);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(2);
    expect(result[0]).toBe(vertex1);
    expect(result[1]).toBe(vertex2);
  });
  test("three vertices in sequence", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const vertexA = addVertex("A", graph);
    const vertexB = addVertex("B", graph);
    const vertexC = addVertex("C", graph);
    addEdge(vertexA, vertexB, null, graph);
    addEdge(vertexB, vertexC, null, graph);
    expect(vertices(graph)).toHaveLength(3);
    expect(edges(graph)).toHaveLength(2);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(3);
    expect(result).toStrictEqual([vertexA, vertexB, vertexC]);
  });
  test("three vertices with linking child", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const vertexA = addVertex("A", graph);
    const vertexB = addVertex("B", graph);
    const vertexC = addVertex("C", graph);
    addEdge(vertexB, vertexA, null, graph);
    addEdge(vertexC, vertexA, null, graph);
    expect(vertices(graph)).toHaveLength(3);
    expect(edges(graph)).toHaveLength(2);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(3);
    expect(result).toStrictEqual([vertexB, vertexC, vertexA]);
  });
  test("three vertices with linking parent", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const vertexA = addVertex("A", graph);
    const vertexB = addVertex("B", graph);
    const vertexC = addVertex("C", graph);
    addEdge(vertexA, vertexB, null, graph);
    addEdge(vertexA, vertexC, null, graph);
    expect(vertices(graph)).toHaveLength(3);
    expect(edges(graph)).toHaveLength(2);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(3);
    expect(result).toStrictEqual([vertexA, vertexB, vertexC]);
  });
  test("three vertex dimond", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const vertexA = addVertex("A", graph);
    const vertexB = addVertex("B", graph);
    const vertexC = addVertex("C", graph);
    const vertexD = addVertex("D", graph);
    addEdge(vertexD, vertexB, null, graph);
    addEdge(vertexD, vertexC, null, graph);
    addEdge(vertexC, vertexA, null, graph);
    addEdge(vertexB, vertexA, null, graph);
    expect(vertices(graph)).toHaveLength(4);
    expect(edges(graph)).toHaveLength(4);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(4);
    expect(result).toStrictEqual([vertexD, vertexB, vertexC, vertexA]);
  });
  test("cycle", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const vertexA = addVertex("A", graph);
    const vertexB = addVertex("B", graph);
    const vertexC = addVertex("C", graph);
    addEdge(vertexA, vertexB, null, graph);
    addEdge(vertexB, vertexC, null, graph);
    addEdge(vertexC, vertexA, null, graph);
    expect(() => topologicalSort(graph)).toThrow("Graph contains a cycle");
  });
  test("complex case 1", () => {
    const graph = new DirectedGraph<null, string, null>(null);
    const vertexA = addVertex("A", graph);
    const vertexB = addVertex("B", graph);
    const vertexC = addVertex("C", graph);
    const vertexD = addVertex("D", graph);
    const vertexE = addVertex("E", graph);
    const vertexF = addVertex("F", graph);
    const vertexG = addVertex("G", graph);

    addEdge(vertexA, vertexB, null, graph);
    addEdge(vertexB, vertexC, null, graph);
    addEdge(vertexA, vertexD, null, graph);
    addEdge(vertexD, vertexC, null, graph);
    addEdge(vertexD, vertexE, null, graph);
    addEdge(vertexC, vertexG, null, graph);
    addEdge(vertexE, vertexF, null, graph);
    addEdge(vertexF, vertexG, null, graph);
    const result = topologicalSort(graph);
    expect(result).toStrictEqual([
      vertexA,
      vertexB,
      vertexD,
      vertexC,
      vertexE,
      vertexF,
      vertexG,
    ]);
  });
});
