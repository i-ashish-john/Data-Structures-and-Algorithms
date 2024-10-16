class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      this.adjacencyList.set(vertex, []);
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    dfs(startVertex) {
      const visited = new Set();
      this.dfsHelper(startVertex, visited);
    }
  
    dfsHelper(vertex, visited) {
      visited.add(vertex);
      console.log(vertex);
  
      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          this.dfsHelper(neighbor, visited);
        }
      }); 
    }
  }
  
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  
  console.log('Depth-First Search:');
  graph.dfs('A');