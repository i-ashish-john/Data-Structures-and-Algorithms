//Here i used the bucket method for collision Handling

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
        // this.table[index]=value
        const bucket=this.table[index]
        if(!bucket){
            bucket=[[key,value]]
        }else{
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){         //
            sameKeyItem[1]=value    // here creating the  additional array for storing the 
            }else{                 //  second value which is come to that same index
            bucket.push([key,value])//
            }                    //
        }
     
    }

    get(key){
        const index= this.hash(key)
        // return this.table[index]
        const bucket=this.table[index]
        if(bucket){
            const samekeyItem=bucket.find(item=>item[0]===key)
            if(samekeyItem){
                return samekeyItem[1]
            } 
        }
        return undefined
    }
    remove(){
        const index= this.hash(value)
        // this.table[index]=undefined
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){//This is the removing method ,so here is connected with a linkedlist 
                bucket.splice(bucket.indexOf(sameKeyItem),1)//if a value is again inserted to that index ,
            }                                           //So here finding the specified index value from the,
                                                       //array and then removing
        }
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
table.set("name","Ashish");
table.set("age","25")

console.log(table.get('age'));
table.set("name","akash");///collotision is happened when i insert a value to the name key
table.display()          /// which means that the value is overwrite ;   
