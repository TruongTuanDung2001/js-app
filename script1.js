let array = [1, 2, 3, 4, 5];
// Vòng for để duyệt qua mảng
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//object
let person = {
    id: 1,
    name: "Dung",
    age: 26,
    address: "TP.HCM"
};

// Cách 1: Lấy giá trị của các thuộc tính trong object
let {id, name, age, address} = person;
// console.log(id, name, age, address);

// Cách 2: Lấy giá trị của các thuộc tính trong object và đổi tên biến
let {id: personId, name: personName, age: personAge, address: personAddress} = person;
// console.log(personId, personName, personAge, personAddress);

let arrayObject = [
    {id: 1, name: "Dung", age: 26, address: "TP.HCM"},
    {id: 2, name: "Anh", age: 25, address: "Hà Nội"},
    {id: 3, name: "Hùng", age: 27, address: "Đà Nẵng"}
];

// Vòng for để duyệt qua mảng object
for(let i = 0; i < arrayObject.length; i++){
    let {id, name, age, address} = arrayObject[i];
    console.log(id, name, age, address);
}

// Vòng while để duyệt qua mảng
let i = 0;
while(i < arrayObject.length){
    console.log("Vong lap while: " + arrayObject[i].name);
    i++;
}

// Vòng do while để duyệt qua mảng
i = 0;
do{
    console.log("Vong lap do while: " + arrayObject[i].address);
    i++;
}while(i < arrayObject.length);

do{

}while(false);//vòng lặp do while sẽ thực hiện ít nhất một lần dù điều kiện có đúng hay không. Trong trường hợp này, vòng lặp sẽ thực hiện một lần và sau đó dừng lại vì điều kiện là false.

//break và continue
for(let i = 0; i < arrayObject.length; i++){
    if(arrayObject[i].age > 26){
        break;//dừng vòng lặp khi gặp điều kiện đúng
        alert('No run');
    }
}

let j = 1;
while(j <= 10){
    if(j === 5){
        j++;
        continue;//bỏ qua lần lặp hiện tại khi gặp điều kiện đúng
    }
    console.log(j);
    j++;
}