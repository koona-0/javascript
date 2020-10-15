// 1. String concatenation
console.log('my' + 'cat');  // +로 문자열과 문자열 합침
console.log('1' + 2);   // 문자열 + 숫자 = 문자열
console.log(`string literals:
 1 + 2 =  ${1 + 2}`);
// $를 이용해 계산한 값을 스트링에 포함해서 문자열을 만듦
// string literals: 는 줄바꿈이나 중간에 ''를 이용해도 문자열로 변환되어 나옴

console.log('nayoung\'s book'); // 문자열에 '쓸 때 \붙여서 쓰기

//2. Numeric operations
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operations
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or)
console.log(`or: ${value1 || value2 || check()}`);
// 연산을 많이하는 함수를 호출하거나 표현문을 제일 앞에 두면 안됨
// 앞에 심플한 값들을 두고 마지막에 마지못해 함수를 호출하게 만들어야 함

// &&(and)  // 마찬가지로 무거운 것을 뒤에 두기
console.log(`or: ${value1 && value2 && check()}`);
// and는 NULL 체크할 때도 많이 쓰임
// often used to compress long if-statement
// nullableObject && nullableObject.something
// 앞의 오브젝트가 null이면 뒤가 실행 안되기 때문
// 즉, nullableObject가 null이 아닐때만 nullableObject의 something을 받아오게 됨
// if(nullableObject ! = null) nullableObject.something; 
// 나중에 간편하게 코드를 작성할 때 유용하게 사용 가능

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('★');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// loose equality 타입 신경쓰지 않고 검사, strict equality는 타입 신경쓰며 검사하기 때문에
// 코딩할 때 웬만하면 strict equality를 사용해서 검사하는 것이 더 좋음

// object equality by reference
const koona1 = { name: 'koona' };
const koona2 = { name: 'koona' };
const koona3 = koona1;
console.log(koona1 == koona2);  // koona1과 2는 다른 주소에 할당되어 있고 각각 다른 이름을 가리키고 있음, false
console.log(koona1 === koona2); // 같은 타입이어도 주소값이 다름, false
console.log(koona1 === koona3); // true 같은 변수

// 추가
console.log(0 == false);    //t
console.log(0 === false);   //f
console.log(' ' == false);  //t 
console.log(' ' === false); //f
console.log(null == undefined); //t
console.log(null === undefined);    //f

// 8. Conditional operations : if
// if, else if, else
const name = 'koona';
if (name === 'koona') {
    console.log('Welcome, Koona!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
// 삼항 연산자
console.log(name === 'koona' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple checks is TS
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('Go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('I love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--
} while (i > 0);

// for loop, for(begin; condition; step)
for (let i = 3; i > 0; i = i - 2) {
    //inline variable declareation
    console.log(`inline variable for: ${i}`);
}

// nested loops 
// O(n^2)이기 때문에 cpu에 좋지 않음 되도록이면 피하기
for (let i = 0; i < 10; i++) {
    for (let j = 0; j > 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// 01. iterate from 0 to 10 and print only even numbers. (use continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`even number : ${i}`);
}

// 02. iterate from 0 to 10 and print numbers until reaching 8. (use break)
for (let i = 0; i <= 10; i++) {
    if (i > 8) break;
    console.log(`a number smaller than 8 : ${i}`);
}