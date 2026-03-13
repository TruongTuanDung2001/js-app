//function
let a = document.getElementById("valueA");
let b = document.getElementById("valueB");
let submitSum = document.getElementById("submitSum");
let resultSum = document.getElementById("resultSum");

// function sum(a, b){
//     return a + b;
// }

// submitSum.addEventListener("click", function(){
//     resultSum.textContent = "Result: " + sum(Number(a.value), Number(b.value));
// });

function sum(){
    return resultSum.textContent = "Result: " + (Number(a.value) + Number(b.value));
}

//Arrow function
const hello = (name) => "Hello " + name;
console.log(hello("Dung"));
console.log(typeof(hello));
//

const sumAB = (a, b) => a + b;
console.log(sumAB(5, 10));
console.log(typeof(sumAB));

