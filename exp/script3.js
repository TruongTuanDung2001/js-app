//Array method
let array = [1,2,3,4,5];
let arrObj = [
    {
        id: 1,
        name: "Tomy",
        age: 22
    },
]


//ADD
//Push / thêm 1 phần tử vào cuối mảng và trả về length của mảng mới thêm vào
array.push(10);
let newArr = [];

//Unshift / thêm vào đầu mảng 1 giá trị và trả về length của mảng mới thêm vào
array.unshift(-10);
array.unshift(-100);


//DELETE
//Pop / xóa phần tử cuối và trả về length của mảng vừa xóa, không cần thêm giá trị, nó tự xóa phần tử cuối
array.pop();

//Shift / xóa phần tử đầu tiên và trả về phần tử đầu tiên, vd: nếu xóa phần tử đầu tiên là -100 thì kết quả trả về là -100
array.shift();
console.log(array.shift());



//Test result 
newArr = array;
console.log(newArr);

