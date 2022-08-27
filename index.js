// let counterDisplayElem = document.querySelector('.counter-display');
// let counterMinusElem = document.querySelector('.counter-minus');
// let counterPlusElem = document.querySelector('.counter-plus');

// let count = 0;

// updateDisplay();

// counterPlusElem.addEventListener("click",()=>{
//     count++;
//     updateDisplay();
// }) ;

// counterMinusElem.addEventListener("click",()=>{
//     count--;
//     updateDisplay();
// });

// function updateDisplay(){
//     counterDisplayElem.innerHTML = count;
// };

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