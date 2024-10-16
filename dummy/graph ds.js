class graph{
    constructor(){
       this.adjacencyList={}
    }

addVertex(vertex){
   if(!this.adjacencyList[vertex]){
    this.adjacencyList[vertex]=new graph()
   }
}

   addEdges(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
        this.addVertex(vertex1)
    }
    if(!this.adjacencyList[vertex2]){
       this.addVertex(vertex2) 
    }
    
   }
    


}
}