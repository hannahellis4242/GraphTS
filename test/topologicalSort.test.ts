import Graph from "../src/Graph";
import addVertex from "../src/addVertex";
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
});
