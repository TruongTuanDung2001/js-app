//Training js basic
let input = document.getElementsByClassName("input");

let result = document.getElementsByClassName("result");
let total = document.getElementsByClassName("total");
let multiplicationTable = document.getElementsByClassName("multiplicationTable");

const btnSubmit = document.getElementById("btnSubmit");
const btnSubmitText = document.getElementById("btnSubmitText");
//
function checkNumber(number){
    if(number % 2 == 0){
        result[0].textContent = "Result: " + number + " la so chan";
    }else{
        result[0].textContent = "Result: " + number + " la so le";
    }
}

function totalN(number){
    let a = 0;
    for(let i = 1; i <= number; i++){
        a += i;
    }
    total[0].textContent = "Total N: " + a;
    return a;
}

function multiplicaionTable(number){
    let a = number;
    let rs = "<h4>Bang cuu chuong</h4>";
    for(let i = 1; i <= 10; i ++){
        rs += `${a} * ${i} = ${a * i}<br>`;
    }
    multiplicationTable[0].innerHTML = rs;
}

//reverse
function reverse(content){
    let newContent = "";
    for(let i = content.length - 1; i >= 0 ; i--){
        newContent += content[i];
    }
    result[1].textContent ="Result: " + newContent;
}

//
btnSubmit.addEventListener("click", function(){
    let number = Number(input[0].value);
    //
    checkNumber(number);
    totalN(number);
    multiplicaionTable(number);
    //
    input[0].value = "";
});

btnSubmitText.addEventListener("click", function(){
    let content = input[1].value;
    console.log(content);
    
    reverse(content);
});

//BT FUNCTION / ARRAY
let arr = [1, 5, 2, 9, 3, 12, -1, 99, 101, -35];
//Find the largest number
//foreach
let fe = arr[0];
arr.forEach(element =>{
    if(element > fe ){
        fe = element;
    }
});

//for
let fr = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > fr){
        fr = arr[i];
    }
}

//filter
let arrFilter = arr.filter(item => {
    let i = 0;
    return item > i;
})

//reduce chuẩn nhất
let arrReduce = arr.reduce((max, number) => {
    return number > max ? max = number: max;
}, 0);

//vd:
// const numbers = [175, 50, 25];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);
//t = 175, n = 50 => t - n = 125;
//t = 125, n = 25 => t - n = 100;

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc, 0);
//t = 0; n = 175 => t - n = -175;
//t = -175; n = 50 => t - n = -225;
//t = -225; n = 25 => t - n = -250;

// function myFunc(total, num) {
//   return total - num;
// } 
//Lưu ý: REDUCE CẦN: reduce(callback, initialValue); initialValue là con số , 0 ở sau á, không bắt buộc phải có
// Quan trọng là callback: 2 tham số (accumulator, currentValue) để làm việc, có thể tạo 1 function có 2 tham số để làm ngoài xong gán vô reduce(function);

//
console.log("The largest number: " + fe);
console.log("The largest number: " + fr);
console.log(arrFilter);
console.log(arrReduce);

//Find even numbers, use filter is the best
let arrEvenNumber = arr.filter(item => item % 2 == 0);
console.log("Array even number: " + arrEvenNumber);
console.log(arrEvenNumber);

//Check prime numbers (Số nguyên tố) chia hết cho 1 và chính nó
function isPrime(number){
    if(number < 2 ){
        return false;
    }

    for(let i = 2; i < number; i++ ){
        if(number % i === 0){ //2 dấu = là ép lỏng vd: '5' == 5, 0 == false, còn 3 dấu = là so sánh giá trị biến và luôn kiểu dữ liệu
            return false;
        }
    }
    return true;
}

console.log("Số nguyên tố: " + isPrime(5)); //true

//Double value array (Map)
let doubleValue = arr.map(item => item * 2);
console.log("Double array: " + doubleValue);
console.log(doubleValue);

//CALLBACK CLOSURE
// function callBack(a, callback){ 
//     //Gọi callback với a
// }
//Callback: Đưa việc xử lý cho function khác làm
// process = người giao việc, callback = người làm việc, a = nguyên liệu.

/* Sử dụng function */
function process(a, callback){
    callback(a); //Mấu chốt nằm ở đây
}

function print(value){
    console.log("Value is : " + value);
}

process(10, print);

// Sử dụng anonymous function
process(12, function(x){
    console.log("Value is : " + x);
});

// Sử dụng arrow funcion
process(18, (x)=> {
    console.log("Value is : " + x);
})

//CLOSURE : Là function và môi trường biến bên ngoài của nó, nó sẽ nhớ các biến scope bên ngoài, mặc dù nó đã kết thúc
// Như là đặt 1 biến count = 0 trong 1 funcion, nó sẽ nhớ biến đó qua mỗi lần chạy function trong 1 function chứa biến count đã nhớ, 
function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;// tại sao không return inner(); ?
    /*
        Nếu dùng closure thì return inner vì mỗi lần gọi fn() thì inner chạy -> count vẫn được giữ lại.
        Nếu dùng bth thì return inner() nó sẽ trả về giá trị luôn, chạy xong là hết, biến bên trong không còn dùng tiếp được nữa
        🧩 Kết luận
            👉 Muốn dùng closure:
            return inner; // 🔥 bắt buộc
            👉 Không dùng:
            return inner(); // ❌ mất closure
    */
}

const fn = outer();
fn(); //1
fn(); //2
fn(); //3

