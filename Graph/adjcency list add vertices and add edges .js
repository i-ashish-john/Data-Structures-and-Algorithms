// has ,add,delete are the predefined method in the set () data structure 
class graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdges(vertex1,vertex2){  
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)   //adding the two vertices to the  main object in the main head
        this.adjacencyList[vertex2].add(vertex1)
        
        
    }
    // printGraph() {
    //     for (let value in this.adjacencyList) {//changed the vertex to value it can change what ever it is as your need ,to fetch the value 
    //         const adjacentVertices = [...this.adjacencyList[value]];
    //         console.log(`${value} -> ${adjacentVertices.join(', ')}`);
    //     }
    // }
    print(){
        for(const node in this.adjacencyList){

            const adjacentVertices=[...this.adjacencyList[node]]
            console.log(node,'=',adjacentVertices)
        }
    }
    hasEdge(FirstVertices,SecondVertices){//this for checking thier is edges between to vertices
        if(this.adjacencyList[FirstVertices].has(SecondVertices)&&this.adjacencyList[SecondVertices].has(FirstVertices)){
            return true
        }
        else{
          return  false
        }
    }
    removeConnection(firstVertex,secondVertex){
        this.adjacencyList[firstVertex].delete(secondVertex)
        this.adjacencyList[secondVertex].delete(firstVertex)
    }
    removeVertex(vertex){// first removing the connection to other vertex then removing the single vertex 
       if(!this.adjacencyList[vertex]) {
        return
       }
       //inside the memmory of the this.adjacency[vertex]=it were 
       //spreading the each of the values inside to the value
        for(let value of this.adjacencyList[vertex]){
            this.removeConnection(vertex,value)
        }
        //after removed the connection between the vertexes ,removing the particular vertex
        delete this.adjacencyList[vertex]               

    }
bfs(vertex){
  let queue=[vertex]   
  let result=[]
  let object={}
  object[vertex]=true
  while(queue.length>0){
     let current=queue.shift()
     result.push(current)

     this.adjacencyList[current].forEach(neighbour => {
        if(!object[neighbour]){
            object[neighbour]=true
            queue.push(neighbour)
        }
     })
  }
  console.log(result)


}
dfs(startVertex){
    let stack=[]
    let object={}
    let adjacency= this.adjacencyList

   function depth(vertex){
        if(!vertex) return null
        object[vertex]=true
        stack.push(vertex)

        adjacency[vertex].forEach(neighbour=>{

            if(!object[neighbour]){
              depth(neighbour)
                 
            }
            
        })
    }

    depth(startVertex)
        console.log("r",stack);

}

    
}
const findAdjecency= new graph()
findAdjecency.addVertex('A')   //      B --->C
findAdjecency.addVertex('B')   //      |     | 
findAdjecency.addVertex('C')   //      A---- >D
findAdjecency.addVertex('D')


findAdjecency.addEdges('A','B')
findAdjecency.addEdges('B','C')
findAdjecency.addEdges('C','D')
findAdjecency.addEdges('A','D')



findAdjecency.print()
console.log(findAdjecency.hasEdge('A','D'))

// findAdjecency.removeConnection('C','B')

// findAdjecency.removeVertex('A')
// findAdjecency.print()

console.log('Breadth-First Search:');
findAdjecency.dfs('A');
// findAdjecency.print()

// A -----> B
// ^       / \
// |      /   \
// |     /     \
// |    /       \
// |   /         \
// |  /           \
// | /             \
// v/               v
// D <-------------- C
