import Graph from "../src/Graph";
import addVertex from "../src/addVertex";
import addEdge from "../src/addEdge"
import topologicalSort from "../src/topologicalSort";
describe("topologicalSort", () => {
  test("empty graph", () => {
    const graph = new Graph<null, string, null>(null, true);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(0);
  });
  test("single vertex graph", () => {
    const graph = new Graph<null, string, null>(null, true);
    const vertex = addVertex("A", graph);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(1);
    expect(result).toContain(vertex);
  });
  test("two vertices graph",()=>{
    const graph = new Graph<null,string,null>(null,true);
    const vertex1 = addVertex("A",graph);
    const vertex2 = addVertex("B",graph);
    addEdge(vertex1,vertex2,null,graph);
    const result = topologicalSort(graph);
    expect(result).toHaveLength(2);
    expect(result[0]).toBe(vertex2);
    expect(result[1]).toBe(vertex1)
  })
});
