const  myMappFunction = (arr,callBack)=>{
    const result = {}

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        result[index] = callBack(element,index,arr);
    }
    return result
}
// testing my own mapp function

const nameToTest = ["Mugisha","andrew","Kamoso"]

const turnToCapital = (strin)=>{
    return strin.toUpperCase()
}

console.log(myMappFunction(nameToTest,turnToCapital))