import DirectedGraph from "../src/DirectedGraph";
import addVertex from "../src/addVertex";
import vertices from "../src/vertices";
import edges from "../src/edges";
import removeVertex from "../src/removeVertex";
import addEdge from "../src/addEdge";

describe("removeVertex", () => {
  describe("DirectedGraph", () => {
    test("remove only vertex should give empty graph", () => {
      const graph = new DirectedGraph<null, string, null>(null);
      const vertex = addVertex("A", graph);
      expect(vertices(graph)).toHaveLength(1);
      const removed = removeVertex(vertex, graph);
      expect(vertices(graph)).toHaveLength(1);
      expect(vertices(removed)).toHaveLength(0);
    });
    test("remove only vertex should give empty graph", () => {
      const graph = new DirectedGraph<null, string, null>(null);
      const vertex = addVertex("A", graph);
      expect(vertices(graph)).toHaveLength(1);
      const removed = removeVertex(vertex, graph);
      expect(vertices(graph)).toHaveLength(1);
      expect(vertices(removed)).toHaveLength(0);
    });
    test("remove linking parent vertex", () => {
      const graph = new DirectedGraph<null, string, null>(null);
      const vertexA = addVertex("A", graph);
      const vertexB = addVertex("B", graph);
      const vertexC = addVertex("C", graph);
      addEdge(vertexA, vertexB, null, graph);
      addEdge(vertexA, vertexC, null, graph);
      expect(vertices(graph)).toHaveLength(3);
      expect(edges(graph)).toHaveLength(2);
      const removed = removeVertex(vertexA, graph);
      expect(vertices(graph)).toHaveLength(3);
      expect(edges(graph)).toHaveLength(2);
      const resultVertices = vertices(removed);
      expect(resultVertices).toHaveLength(2);
      expect(resultVertices).not.toContain(vertexA);
      expect(edges(removed)).toHaveLength(0);
    });
    test("remove linking child vertex", () => {
      const graph = new DirectedGraph<null, string, null>(null);
      const vertexA = addVertex("A", graph);
      const vertexB = addVertex("B", graph);
      const vertexC = addVertex("C", graph);
      addEdge(vertexB, vertexA, null, graph);
      addEdge(vertexC, vertexA, null, graph);
      expect(vertices(graph)).toHaveLength(3);
      expect(edges(graph)).toHaveLength(2);
      const removed = removeVertex(vertexA, graph);
      expect(vertices(graph)).toHaveLength(3);
      expect(edges(graph)).toHaveLength(2);
      const resultVertices = vertices(removed);
      expect(resultVertices).toHaveLength(2);
      expect(resultVertices).not.toContain(vertexA);
      expect(edges(removed)).toHaveLength(0);
    });
    test("remove linking middle vertex", () => {
      const graph = new DirectedGraph<null, string, null>(null);
      const vertexA = addVertex("A", graph);
      const vertexB = addVertex("B", graph);
      const vertexC = addVertex("C", graph);
      addEdge(vertexA, vertexB, null, graph);
      addEdge(vertexB, vertexC, null, graph);
      expect(vertices(graph)).toHaveLength(3);
      expect(edges(graph)).toHaveLength(2);
      const removed = removeVertex(vertexB, graph);
      expect(vertices(graph)).toHaveLength(3);
      expect(edges(graph)).toHaveLength(2);
      const resultVertices = vertices(removed);
      expect(resultVertices).toHaveLength(2);
      expect(resultVertices).not.toContain(vertexB);
      expect(edges(removed)).toHaveLength(0);
    });
    test("cycle", () => {
      const graph = new DirectedGraph<null, string, null>(null);
      const vertexA = addVertex("A", graph);
      const vertexB = addVertex("B", graph);
      const vertexC = addVertex("C", graph);
      addEdge(vertexA, vertexB, null, graph);
      addEdge(vertexB, vertexC, null, graph);
      const remainingEdge = addEdge(vertexC, vertexA, null, graph);
      expect(vertices(graph)).toHaveLength(3);
      expect(edges(graph)).toHaveLength(3);
      const removed = removeVertex(vertexB, graph);
      expect(vertices(graph)).toHaveLength(3);
      expect(edges(graph)).toHaveLength(3);
      const resultVertices = vertices(removed);
      expect(resultVertices).toHaveLength(2);
      expect(resultVertices).not.toContain(vertexB);
      const resultEdges = edges(removed);
      expect(resultEdges).toHaveLength(1);
      expect(resultEdges).toContain(remainingEdge);
    });
  });
});
