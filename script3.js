//Change content for element
let list = document.getElementById("list");
let item = document.getElementsByClassName("item");
console.log(typeof (item));
console.log(item);

// let item = document.querySelectorAll(".item");
//item[0] -> [5]

for (let i = 0; i < item.length; i++) {
    item[i].textContent = "Item " + (i + 1) + ": Content";
}

list.style.cssText =
    "color: white; " +
    "background-color: rgb(69, 19, 19); " +
    "width: 300px; " +
    "height: 200px; " +
    "padding: 20px; " +
    "border-radius: 10px;"
    ;

Array.from(item).forEach(element => {//Dùng Array.from để chuyển đổi HTMLCollection thành mảng, sau đó dùng forEach để duyệt qua từng phần tử trong mảng và thay đổi màu sắc của chúng
    element.style.color = "orange";
});
//Vì getElementsByClassName trả về một HTMLCollection, nó không phải là một mảng thực sự, nên không có phương thức forEach trực tiếp. Tuy nhiên, bạn có thể sử dụng Array.from để chuyển đổi HTMLCollection thành một mảng thực sự, sau đó bạn có thể sử dụng forEach để duyệt qua từng phần tử trong mảng và thay đổi màu sắc của chúng.

//Nếu sử dụng querySelectorAll, nó trả về một NodeList, và NodeList có phương thức forEach trực tiếp, nên bạn có thể sử dụng forEach mà không cần chuyển đổi.

function changeColor() {
    Array.from(item).forEach(element => {//Dùng Array.from để chuyển đổi HTMLCollection thành mảng, sau đó dùng forEach để duyệt qua từng phần tử trong mảng và thay đổi màu sắc của chúng
        element.style.color = "orange";
    });
    for (let i = 0; i < Array.from(item).length; i++) {
        if (i == 2) {
            //thay đổi màu sắc của phần tử thứ 3 (index 2) trong HTMLCollection thành màu vàng
            item[i].style.color = "yellow";
        }
    }
}

function changeContentNew() {
    list.innerHTML = `
    <li class="item">Item 1: New Content</li>
    <li class="item">Item 2: New Content</li>
    <li class="item">Item 3: New Content</li>
    <li class="item">Item 4: New Content</li>
    <li class="item">Item 5: New Content</li>
    <button onclick="changeContentOld()" style="padding: 10px; font-size: 20px;">Change Content</button>
    `;
    changeColor();
}

function changeContentOld() {
    list.innerHTML = `
    <li class="item">Item 1: Old Content</li>
    <li class="item">Item 2: Old Content</li>
    <li class="item">Item 3: Old Content</li>
    <li class="item">Item 4: Old Content</li>
    <li class="item">Item 5: Old Content</li>
    <button onclick="changeContentNew()" style="padding: 10px; font-size: 20px;">Change Content</button>
    `;
    changeColor();
}