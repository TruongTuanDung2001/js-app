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
let btnDelete = document.getElementsByClassName("btn-delete");
// list.innerHTML = `<li class="item-list">User 2</li>`

function addUser(userInput){
    if(userInput.value === ""){
        alert("No data, please check your input");
    }
    else{
        allUser.push(userInput.value);//allUser['user1', 'user2', ...]
    }
    userInput.value = "";
    userInput.focus();
}

function render(){
    list.innerHTML = "";
    for(let i = 0; i < allUser.length; i++){
        list.innerHTML += `<li class="item-list">${allUser[i]}
            <button type="submit" id="deleteUser" class="btn-delete">❌</button>
        </li>`;
    }
    console.log(allUser);
}

btnAdd.addEventListener("click", function(){
    addUser(userInput);
    render();
});

userInput.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        addUser(userInput);
        render();
    }
});


list.addEventListener('click', function(e){
    if(e.target.classList.contains("btn-delete")){
        console.log(e.target);
        console.log(e.target.parentElement);
        let li = e.target.parentElement; //lấy 1 thẻ li trong mà chứa cái button X vừa click
        let index = Array.from(list.children).indexOf(li);// tìm vị trí thẻ li trong list thành con số trong mảng = index
        let newArr = Array.from(list.children);
        console.log(newArr);
        /* 
            0: li.item-list
            1: li.item-list
            2: li.item-list
            3: li.item-list 
        */
        console.log(li);
        console.log(index);
        allUser.splice(index, 1);// xóa pt;
        render();
    }
});

/*
🔢 5. Tìm vị trí trong list
let index = Array.from(list.children).indexOf(li);

Giải thích từng bước:

👉 list.children
Lấy tất cả <li> trong list
Nhưng nó là HTMLCollection (không phải array)
👉 Array.from(...)
Biến nó thành array
👉 .indexOf(li)
Tìm vị trí của <li> vừa click

👉 Ví dụ:

["user1", "user2", "user3"]
          ↑ index = 1
*/

/*LỖI BỊ LỆCH INDEX TRONG THẺ LI
📦 Vì bạn đang render kiểu này:
<li>User 1
<button>❌</button>
</li>
<br>
<li>User 2
<button>❌</button>
</li>
<br>
DƯ CÁI <BR> :)))))
🧠 Nên list.children sẽ là:
[
  li,       // index 0
  button,   // index 1
  br,       // index 2
  li,       // index 3
  button,   // index 4
  br,       // index 5
  ...
]

*/
