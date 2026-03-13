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

//DOM
let list = document.getElementById("list");
console.log(list);
console.log(list.innerHTML);
console.log(list.textContent);

let item = document.getElementsByClassName("item");
console.log(typeof(item));
console.log(item);
console.log(item[0]);


console.log("query");
// let itemQuery = document.querySelector(".content"); //2 thẻ có class là content nhưng querySelector chỉ lấy thẻ đầu tiên 
let itemQuery = document.querySelector("#list .content"); //cách này sẽ lấy thẻ có class là content nằm trong thẻ có id là list, vì vậy sẽ lấy được thẻ thứ 2 có class là content
console.log(itemQuery);




