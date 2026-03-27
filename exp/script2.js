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

