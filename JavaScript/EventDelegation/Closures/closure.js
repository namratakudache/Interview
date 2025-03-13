function outer(){
    let count=0
    return function inner(){
        count++
        console.log(count)

    }
}
let increment=outer()
increment()
increment()
increment()