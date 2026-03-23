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

console.log(a);// Lỗi: a is not defined, vì a được khai báo bằng let, chỉ tồn tại trong khối lệnh
console.log(b);// In ra: 20, vì b được khai báo bằng var, tồn tại trong phạm vi của hàm hoặc toàn cục
console.log(c);// Lỗi: c is not defined, vì c được khai báo bằng const, chỉ tồn tại trong khối lệnh
// Nên dùng let hoặc const thay vì var để tránh các vấn đề về phạm vi và hoisting.


