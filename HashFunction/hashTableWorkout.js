class HashTable{
    constructor(size){
        this.table= new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        const index= this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index= this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if (this.table[i] !== undefined) {
            console.log('values =',this.table[i])
        }
    }
 }
} 

const table = new HashTable(10)
table.set("name","Ashish")
table.set("age","16")
console.log('get = ',table.get("age"))

table.remove("age")
// table.get("name")
table.display()