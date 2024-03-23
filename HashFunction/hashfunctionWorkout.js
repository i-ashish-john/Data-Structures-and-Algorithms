class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
            // console.log('charCodeAt',charCodeAt(i))
        }
        return total % this.size
    }
    
    set(key,value){
        const index=this.hash(key)
        this.table[index]=value
    }

    get(key){
        const index= this.hash(key)
        return this.table[index]
    }
    remove(){
        const index= this.hash(value)
        this.table[index]=undefined
    }
    display(){
        for (let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log('table value are:',this.table[i])
            }
        }
    }
}

const table = new HashTable(50)
// console.log('tabel:',table);
table.set("name","Ashish");
table.set("age","25")
table.display()  
// console.log(table.get('age'));
// table.set("name","akash");///collotision is happened when i insert a value to the name key
// table.display()          /// which means that the value is overwrite ;   