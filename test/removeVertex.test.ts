import Graph from "../src/Graph"
import removeVertex from "../src/removeVertex"

describe("removeVertex",()=>{
  test("remove only vertex should give empty graph",()=>{
    const graph = new Graph<null,string,null>(null,true);
    const vertex = addVertex("A",graph);
    
  });
});
