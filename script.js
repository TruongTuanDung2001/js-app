// Biến và hằng số
let a = 10;
let b = 20;
let c = a + b;
console.log(c);

const aa = 10;
let bb = 20;
bb = aa + bb;
console.log(bb);

// Lấy phần tử từ mảng
let result = document.getElementById("result");
const submit = document.getElementById("submit");

result.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();//submit form có thể reload trang nên cần preventDefault để ngăn chặn hành vi mặc định của form.
        let value = result.value;
        console.log(value);
        result.value = "";
    addArrayNumbers(Number(value));
}});

submit.addEventListener("click", function(){
    let value = result.value;
    console.log(value);
    result.value = "";
    addArrayNumbers(Number(value));
});

let arr = [1, 2, 3, 4, 5];

// Hàm thêm số vào mảng
function addArrayNumbers(numbers){
    if(numbers === 0){
        alert("Please enter a valid number");
        return;
    }
    else if(numbers > 0 && numbers < 10){
        arr.push(numbers);
        console.log(arr);
    }
    else{
        alert("Please enter a number between 1 and 9");
    }
}
