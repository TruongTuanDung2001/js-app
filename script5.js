//Arrow function
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

const user = (id, name, age, address) => {
    {
        id, name, age, address
    }
}
//Callback
const color = (nameColor) =>  console.log("Color is " + nameColor);

function getColor(cb){
    let nameColor = "red";
    cb(nameColor);
}

getColor(color);
//Callback là một hàm được truyền vào một hàm khác như một đối số và được gọi sau khi một số sự kiện hoặc điều kiện xảy ra. Nó thường được sử dụng để xử lý các tác vụ bất đồng bộ, chẳng hạn như đọc dữ liệu từ một API hoặc xử lý sự kiện người dùng. Callback giúp đảm bảo rằng mã của bạn không bị chặn và có thể tiếp tục thực thi trong khi chờ đợi kết quả từ các tác vụ bất đồng bộ.

//callback hell
setTimeout(() => {
    console.log("B1");
    setTimeout(() => {
        console.log("B2");
        setTimeout(() => {
            console.log("B3");
        }, 1000);
    }, 1000);
}, 1000);
//Lỏ, khó đọc, khó debug

//Promise

//Async/Await

