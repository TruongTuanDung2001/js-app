//Scope in JavaScript
//Global Scope
var globalVariable = "I am a global variable";//Đây là một biến toàn cục, có thể truy cập từ bất kỳ đâu trong mã

//Function Scope
function myFunction(){
    var functionVariable = "This is a function variable";//Đây là một biến cục bộ, chỉ tồn tại trong phạm vi của hàm
    console.log(functionVariable); // In ra: This is a function variable
}
console.log(globalVariable); // In ra: I am a global variable
myFunction();
//console.log(functionVariable); // Lỗi: functionVariable is not defined, vì nó không tồn tại ngoài hàm

//Block Scope (ES6+)
if(true){
    let blockVariable = "This is a block variable";//Đây là một biến cục bộ, chỉ tồn tại trong phạm vi của khối lệnh
    console.log(blockVariable); // In ra: This is a block variable
    let a = 10;
    var b = 20;
    const c = 30;
}

//console.log(a);// Lỗi: a is not defined, vì a được khai báo bằng let, chỉ tồn tại trong khối lệnh
console.log(b);// In ra: 20, vì b được khai báo bằng var, tồn tại trong phạm vi của hàm hoặc toàn cục
//console.log(c);// Lỗi: c is not defined, vì c được khai báo bằng const, chỉ tồn tại trong khối lệnh
// Nên dùng let hoặc const thay vì var để tránh các vấn đề về phạm vi và hoisting.


//Hosting
console.log(x); // In ra: undefined, vì biến x được hoisted nhưng chưa được gán giá trị
var x = 9;

// console.log(y); // Lỗi: Cannot access 'y' before initialization, vì biến y được hoisted nhưng không được gán giá trị trước khi sử dụng
let y = 10;

// console.log(z); // Lỗi: Cannot access 'z' before initialization, vì biến z được hoisted nhưng không được gán giá trị trước khi sử dụng
const z = 11;

//function 
hello(); // In ra: Hello, World!, vì hàm hello được hoisted và có thể được gọi trước khi định nghĩa, nhưng chỉ khi nó được khai báo bằng function declaration. Nếu sử dụng function expression hoặc arrow function, sẽ không thể gọi trước khi định nghĩa.

function hello(){ //Đây là một function declaration, có thể được hoisted và gọi trước khi định nghĩa
    console.log("Hello, World!");
}

//function expression
//helloName("Alice"); // Khoong thể gọi trước khi định nghĩa, vì helloName là một function expression, không được hoisted như function declaration

var helloName = function (name){
    console.log("Hello, " + name + "!");
}

//arrow function
//helloDay("Monday"); // Khoong thể gọi trước khi định nghĩa, vì helloDay là một arrow function, không được hoisted như function declaration

const helloDay = (day) =>{
    console.log("Have a nice " + day + "!");
}