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

//CHECK
//Map / trả về 1 mảng mới, không ảnh hưởng đến mảng cũ, phải dùng biến mới để lưu lại
array.map(item => item * 2); // chưa lưu mới lại nên mảng cũ vẫn chưa thay đổi
let arrMap = array.map(item =>{
    if(item % 2 == 0){
        return item * 2; // với map thì mỗi lần lặp phải return nha.
    }

    //item % 2 == 0 ? item * 2 : item; // if rút gọn
    return item
}); // mảng mới trả về arrMap

//Test result 
newArr = array;
console.log(newArr);
console.log(arrMap);

