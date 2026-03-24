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


//Closure
//Closure là một tính năng mạnh mẽ trong JavaScript, cho phép một hàm truy cập và thao tác với các biến từ phạm vi bên ngoài của nó, ngay cả sau khi phạm vi đó đã kết thúc. Điều này tạo ra một môi trường riêng biệt cho mỗi lần gọi hàm, giúp quản lý trạng thái và dữ liệu một cách hiệu quả.

function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++;
        console.log("Count: " + count);
    }
    return innerFunction;
}

const myOuterFunction = outerFunction();
myOuterFunction();
myOuterFunction();
myOuterFunction();

//vd
function createUser(id){
    let password = "12345"; // Biến password chỉ tồn tại trong phạm vi của createUser
    return{
        id: id,
        getPassword: function(){
            return password; // Hàm getPassword có thể truy cập biến password nhờ closure
        },
        setPassword: (newPassword) =>{
            password = newPassword; // Hàm setPassword có thể thay đổi giá trị của biến password nhờ closure
        }
    }
}

const user1 = createUser("user1");
console.log(user1);
console.log(user1.getPassword()); // In ra: 12345
user1.setPassword("67890");
console.log(user1.getPassword()); // In ra: 67890

//vd callback / event
function count(){
    //
    let count = 1;
    let counter = document.querySelector(".count");
    let btnCount = document.querySelector(".btn-count");
    //
    function increment(){
        // Khi nút được click, hàm này sẽ được gọi và có thể truy cập biến count và counter nhờ closure, vẫn nhớ biến count không bị reset về 1 mỗi lần gọi hàm increment, mà nó sẽ tăng dần lên mỗi lần nút được click.
        btnCount.addEventListener("click", function(){
            counter.textContent = count++;
        })
    }
    //
    increment();
}
count();


//Trong ví dụ trên, hàm createUser tạo ra một closure với biến password. Các hàm getPassword và setPassword có thể truy cập và thay đổi giá trị của password, ngay cả sau khi createUser đã hoàn thành thực thi. Điều này cho phép chúng ta quản lý trạng thái của password một cách an toàn và hiệu quả.

//Có nghĩa là cái biến hay function trong cái hàm đã được chạy và kết thúc rồi nhưng mà vẫn có thể truy cập được, vì nó đã được lưu lại trong closure. Closure giúp chúng ta tạo ra các hàm có trạng thái riêng biệt và quản lý dữ liệu một cách hiệu quả.

//Nó vẫn nhớ giá trị của biến cho dù hàm đã kết thúc và biến đã thay đổi giá trị nhưng nó vẫn nhớ giá trị đã thay đổi
