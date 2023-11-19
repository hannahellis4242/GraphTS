import DirectedGraph from "../src/DirectedGraph";
import vertices from "../src/vertices";
import edges from "../src/edges";
import addVertex from "../src/addVertex";
import addEdge from "../src/addEdge";
import inEdges from "../src/inEdges";
import outEdges from "../src/outEdges";
import adjacentVertices from "../src/adjacentVertices";

describe("Directed Graph", () => {
  test("Graph starts off empty", () => {
    const graph = new DirectedGraph<null, string, number>(null);
    expect(vertices(graph)).toHaveLength(0);
  });
  test("Adding a vertex", () => {
    const graph = new DirectedGraph<null, string, number>(null);
    const data = "text";
    const v = addVertex(data, graph);
    expect(vertices(graph)).toHaveLength(1);
    expect(graph.getVertexData(v)).toBe(data);
  });
  test("Adding two vertices", () => {
    const graph = new DirectedGraph<null, string, number>(null);
    const dataA = "textA";
    const dataB = "testB";
    const a = addVertex(dataA, graph);
    const b = addVertex(dataB, graph);
    expect(vertices(graph)).toHaveLength(2);
    expect(graph.getVertexData(a)).toBe(dataA);
    expect(graph.getVertexData(b)).toBe(dataB);
  });
  test("Adding an edge between two vertices", () => {
    const graph = new DirectedGraph<null, string, number>(null);
    const dataA = "textA";
    const dataB = "testB";
    const edgeData = 42;
    const a = addVertex(dataA, graph);
    const b = addVertex(dataB, graph);
    const e = addEdge(a, b, edgeData, graph);
    expect(vertices(graph)).toHaveLength(2);
    expect(edges(graph)).toHaveLength(1);
    expect(graph.getVertexData(a)).toBe(dataA);
    expect(graph.getVertexData(b)).toBe(dataB);
    expect(graph.getEdgeData(e)).toBe(edgeData);
    expect(outEdges(a, graph)).toHaveLength(1);
    expect(inEdges(a, graph)).toHaveLength(0);
    expect(outEdges(b, graph)).toHaveLength(0);
    expect(inEdges(b, graph)).toHaveLength(1);
    {
      const result = adjacentVertices(a, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(b);
    }
    {
      const result = adjacentVertices(b, graph);
      expect(result).toHaveLength(0);
    }
  });
  test("Adding two edges", () => {
    const graph = new DirectedGraph<null, string, number>(null);
    const dataA = "textA";
    const dataB = "testB";
    const dataC = "testC";
    const edge1Data = 1;
    const edge2Data = 2;
    const a = addVertex(dataA, graph);
    const b = addVertex(dataB, graph);
    const c = addVertex(dataC, graph);
    const e1 = addEdge(a, b, edge1Data, graph);
    const e2 = addEdge(b, c, edge2Data, graph);
    expect(vertices(graph)).toHaveLength(3);
    expect(edges(graph)).toHaveLength(2);
    expect(graph.getVertexData(a)).toBe(dataA);
    expect(graph.getVertexData(b)).toBe(dataB);
    expect(graph.getVertexData(c)).toBe(dataC);
    expect(graph.getEdgeData(e1)).toBe(edge1Data);
    expect(graph.getEdgeData(e2)).toBe(edge2Data);
    {
      const result = outEdges(a, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(e1);
    }
    expect(inEdges(a, graph)).toHaveLength(0);
    {
      const result = outEdges(b, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(e2);
    }
    {
      const result = inEdges(b, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(e1);
    }
    expect(outEdges(c, graph)).toHaveLength(0);
    {
      const result = inEdges(c, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(e2);
    }
    {
      const result = adjacentVertices(a, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(b);
    }
    {
      const result = adjacentVertices(b, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(c);
    }
    expect(adjacentVertices(c, graph)).toHaveLength(0);
  });
  test("Adding parallel edges in a loop", () => {
    const graph = new DirectedGraph<null, string, number>(null);
    const dataA = "textA";
    const dataB = "testB";
    const dataC = "testC";
    const edge1Data = 1;
    const edge2Data = 2;
    const edge3Data = 3;
    const a = addVertex(dataA, graph);
    const b = addVertex(dataB, graph);
    const c = addVertex(dataC, graph);
    const e1 = addEdge(a, b, edge1Data, graph);
    const e2 = addEdge(b, c, edge2Data, graph);
    const e3 = addEdge(b, a, edge3Data, graph);
    expect(vertices(graph)).toHaveLength(3);
    expect(edges(graph)).toHaveLength(3);
    expect(graph.getVertexData(a)).toBe(dataA);
    expect(graph.getVertexData(b)).toBe(dataB);
    expect(graph.getVertexData(c)).toBe(dataC);
    expect(graph.getEdgeData(e1)).toBe(edge1Data);
    expect(graph.getEdgeData(e2)).toBe(edge2Data);
    expect(graph.getEdgeData(e3)).toBe(edge3Data);
    {
      const result = outEdges(a, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(e1);
    }
    {
      const result = inEdges(a, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(e3);
    }
    {
      const result = outEdges(b, graph);
      expect(result).toHaveLength(2);
      expect(result).toContain(e2);
      expect(result).toContain(e3);
    }
    {
      const result = inEdges(b, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(e1);
    }
    {
      const result = outEdges(c, graph);
      expect(result).toHaveLength(0);
    }
    {
      const result = inEdges(c, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(e2);
    }
    {
      const result = adjacentVertices(a, graph);
      expect(result).toHaveLength(1);
      expect(result).toContain(b);
    }
    {
      const result = adjacentVertices(b, graph);
      expect(result).toHaveLength(2);
      expect(result).toContain(a);
      expect(result).toContain(c);
    }
    {
      const result = adjacentVertices(c, graph);
      expect(result).toHaveLength(0);
    }
  });
});
