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

    hasEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1)){
            return true
        }
         return false
        
       
    }

    removeEdges(vertex1,vertex2){
          if(this.adjacencyList[vertex1].has(vertex2)&& this.adjacencyList[vertex2].has(vertex1)){
            this.adjacencyList[vertex1].delete(vertex2)
            this.adjacencyList[vertex2].delete(vertex1)
          }
    }

    // removeVertex(vertex){
    //     if(this.adjacencyList[vertex].has(vertex)){
    //         this.removeEdges(vertex,vertex)
    //     }
    //       delete this.adjacencyList[vertex]
    // }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }
        for(let node of this.adjacencyList[vertex]){
            this.removeEdges(vertex,node)
        }

        delete this.adjacencyList[vertex]

    }

    bfs(vertex){
        let queue=[vertex]
        let result=[]
        let visited={}
        visited[vertex]=true
        while(queue.length>0){
            let current = queue.shift()
            result.push(current)
    
        if(this.adjacencyList[current]){
            this.adjacencyList[current].forEach(neighbour => {
            
                if(!visited[neighbour]){
                    visited[neighbour]=true//a:true,b:true etc..
                queue.push(neighbour)
                }
        }) 
     }           
 }
    console.log("r",result);
    }

    dfs(startVertex){
        let stack=[]
        let visited={}
       let adjecenc=this.adjacencyList
        // visited[vertex]=true

       function depth(vertex){
            if(!vertex) return null
            visited[vertex]=true
            stack.push(vertex)
           
            adjecenc[vertex].forEach(neighbour=>{

                if(!visited[neighbour]){
                   depth(neighbour)   
                }
            })

        }
        depth(startVertex)
        console.log('s',stack)  

    }
    

    print(){
     for(const node in this.adjacencyList){
          const current=[...this.adjacencyList[node]]
          console.log(node ,'=',current)
     }
    }

}

const adj= new graph()
adj.addVertex('A')
adj.addVertex('B')
adj.addVertex('C')
adj.addVertex('D')


adj.addEdges('A','B')
adj.addEdges('B','A')
adj.addEdges('B','C')
adj.addEdges('C','B')
adj.addEdges('C','D')
adj.addEdges('D','C')
adj.addEdges('D','A')

adj.print()
adj.dfs('A')
adj.bfs('A')

// console.log("--------------");
// adj.removeEdges('A','B')
// adj.removeVertex('A')
// adj.print()


// console.log('result',adj.hasEdge('D','B'))