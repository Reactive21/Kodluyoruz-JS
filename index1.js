let counter = 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML=counter

increaseDOM.addEventListener("click", function(){
    counter++;
    counterDOM.innerHTML=counter
})
decreaseDOM.addEventListener("click", function(){
    counter--;
    counterDOM.innerHTML=counter
})
