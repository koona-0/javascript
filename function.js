// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();
// Hello만 출력하기 때문에 쓸모없음
// 파라미터를 넣어서 유용하게 만들기
function log(message) {
    console.log(message);
}
log('Hello@');
// 자바스크립트에는 타입이 없음
// 함수만 보고 어떤 타입을 전달해야하는지 모름
log(1234);
// 숫자가 문자열로 변환되어 출력되어 상관없지만
// 다른 함수에서 타입이 중요한 경우 자바스크립트는 조금 난해 -> 타입스크립트

// 2. Parameters
// premitive parameters: passd by value
// object parameters: passd by reference
function changeName(obj) {
    obj.name = 'coder';
}
const koona = { name: 'koona' };
log(koona);
changeName(koona);
log(koona);
// object는 reference로 전달되기 때문에 함수 안에서 
// object의 값을 변경하게 되면 변경된 사항이 그대로 메모리에 적용
// 때문에 추후에 변경된 사항을 확인 가능

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage(`Hi!`);
// 파라미터 옆에 원하는 default 값을 지정해주면
// 사용자가 파라미터를 전달하지 않았을 때 default값으로 대체됨

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 간단 버전: for of 문법 이용
    // args의 값들이 차례대로 하나씩 arg에 지정되며 출력됨
    for (const arg of args) {
        console.log(arg);
    }
    // 초간단 버전: 배열에 forEach라는 함수형 언어를 이용해서 출력
    args.forEach((arg) => console.log(arg));
}
printAll('koona', 'is', 'cuty');
/// ...-> Rest parameters 배열 형태로 전달

// 5. Local scope
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); -> x
}
printMessage();
// console.log(message); -> x
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);   //3
console.log(`sum: ${sum(1, 2)}`);
// return type이 없는 경우는
// return undefinded; 가 들어간 것과 같음, 생략 가능

// 7. Eerly return, early exit (현업 팁)
// bad : ~일때 ~하라고 작성하면 가독성 떨어짐
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}
//good : 조건이 맞지 않을 때 빠르게 return해서 함수 종료하고 조건이 맞을 때만 필요한 로직 실행하도록 하기 
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an arguement to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    // print(); 함수 안에서 자신 호출할 때 (재귀)
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// 간결하게 쓸 수 있음
// 배열이나 리스트 프로그래밍 할 때 최고!

// Function expression을 쓰게 되면 function 키워드도 쓰고 블록도 써야함 -> 번거로움
//const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
// function 키워드 지우고 블록도 지운 후
// 한 줄로 묶어서 => Arrow 표기하면 끝!

// const add = function(a, b){
//     return a+b;
// };
const add = (a, b) => a + b;

// 함수 안에서 조금 더 많은 일을 하려고 블록을 이용하면 return 키워드로 값을 반환해야함
const simpleMul = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
// 선언 함과 동시에 바로 호출
// 함수 선언을 괄호로 묶은 후 함수 호출하듯이 ();

// Fun quiz
// function calculate(command, a, b)
// command: add, sub, div, mul, rem
const calculate = (command, a, b) => {
    let result;
    switch (command) {
        case 'add':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        case 'div':
            result = a / b;
            break;
        case 'mul':
            result = a * b;
            break;
        case 'rem':
            result = a % b;
            break;
        default:
            result = 'Invalid operator.';
            break;
    }
    return result;
};
console.log(calculate('mul',5,3));

