const MyObj ={
    [Symbol(`mySymbol`)]:42,
    get random(){ return `test`}
}

console.log(Object.getOwnPropertyDescriptors(MyObj))