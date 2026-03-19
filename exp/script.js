console.log("Hello world");
//
let name = document.getElementById("name");
let age = document.getElementById("age");
let address = document.getElementById("address");
let submit = document.getElementById("submit-btn");
//
let array = [];
//
let result_wrapper = document.getElementById("result-wrapper");
let result = document.getElementById("result");
//
submit.addEventListener("click", function () {
    let obj = {
        name: name.value,
        age: age.value,
        address: address.value,
    };
    //
    array.push(obj);
    console.log(array);
    //
    result_wrapper.style.display = "block";
    let html = "";
    for (let i = 0; i < array.length; i++) {
        html += `
            <ul class="result-list">
                <li>ID: <span>${i + 1}</span></li>
                <li>Name: <span>${array[i].name}</span></li>
                <li>Age: <span>${array[i].age}</span></li>
                <li>Address: <span>${array[i].address}</span></li>
            </ul>
    `;
    }
    result.innerHTML = html;
    name.value = "";
    age.value = "";
    address.value = "quan12";
});

