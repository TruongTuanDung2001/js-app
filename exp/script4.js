//PROMISE + ASYNC/AWAIT
function delay(text, ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, ms)
    })
}

delay("Hello day", 2000)
.then(data => {
    console.log(data);
    return data = "Hello month";
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})

async function run(){
    console.log(await delay("TRƯƠNG TUẤN DŨNG", 1500));// đặt await trước delay vì nó đợi delay xong mới chạy, muốn chạy tuần tự thì thêm ở dưới
}
run();

//DOM
let nameInput = document.getElementById("name");
let btnShow = document.getElementById("btn-show");
let resultName = document.getElementById("result");

btnShow.addEventListener("click", function(){
    resultName.textContent = nameInput.value;
});

//
let userInput = document.getElementById("user");
let list = document.getElementById("list");
let btnAdd = document.getElementById("btn-add");
let allUser = [];
// list.innerHTML = `<li class="item-list">User 2</li>`

function addUser(userInput){
    if(userInput.value == 0){
        alert("No data, please check your input");
    }
    else{
        allUser.push(userInput.value);//allUser['user1', 'user2', ...]
        list.innerHTML = "";
        for(let i = 0; i < allUser.length; i++){
            list.innerHTML += `<li class="item-list">${allUser[i]}</li> <br>`;
        }
    }
    userInput.value = "";
    userInput.focus();
}

btnAdd.addEventListener("click", function(){
    addUser(userInput);
});

userInput.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        addUser(userInput);
    }
});


