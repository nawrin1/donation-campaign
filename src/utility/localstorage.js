const getArray =()=>{
    const storedArray=localStorage.getItem("item")
    if (storedArray){
        return JSON.parse(storedArray)
    }
    else{
        return []
    }
}
const setArray=(data)=>{
    const newStorred=getArray()
    newStorred.push(data)
    localStorage.setItem('item',JSON.stringify(newStorred))

}

const localstorage = (data) => {
    setArray(data)



};

export {localstorage,getArray};