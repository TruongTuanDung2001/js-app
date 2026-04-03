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