// 함수 선언

// function doSomething() {
//     console.log('hello');
// }
function doSomething(add) {
    console.log(add);
}

function add(a, b) {
    const sum = a+ b;
    return sum;
}

// 함수 호출

//doSomething();
const result = add(1, 2);
console.log(result);
doSomething(add); // 함수 자체를 전달했기 때문에 함수가 출력
doSomething(add(1, 2));