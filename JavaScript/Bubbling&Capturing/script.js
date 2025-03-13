
//Event Capturing and Bubbling
document.querySelector("#grandParent").addEventListener('click',(e)=>{
    console.log("grandparent clicked")
    e.stopPropagation()
   
},true)

document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("parent clicked")
    e.stopPropagation()
},true)

document.querySelector("#child").addEventListener('click',(e)=>{
    console.log("child clicked")
    e.stopPropagation()
},true)

//Event Capturing:third arg=true,propagates from parent to child
//Event Bubbling:third argument :false,propagates from child to parent
//To stop propagation:use e.stopPropagation()