function getKeyByValue(obj,value){

    for (let key in obj){
        if(obj[key]===value){
            return key;
        }
    }
}
const menu = {
    "mango":250,
    "orange":400,
    "banana":430
}
console.log(getKeyByValue(menu,430));