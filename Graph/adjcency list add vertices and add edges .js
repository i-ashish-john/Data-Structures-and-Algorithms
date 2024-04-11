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

        this.adjacencyList[vertex1].add(vertex2)
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
    
    
}
const findAdjecency= new graph()
findAdjecency.addVertex('A')   //      B --->C
findAdjecency.addVertex('B')   //      |     | 
findAdjecency.addVertex('C')   //      A---- >D
findAdjecency.addVertex('D')


findAdjecency.addEdges('A','B')
findAdjecency.addEdges('B','C')
findAdjecency.addEdges('C','D')


findAdjecency.print()

