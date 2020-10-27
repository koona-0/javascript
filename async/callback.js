'use strict';

// JavaScript is synchronous.
// 자바스크립트는 동기적!
// Execute the code block in order after hoisting.
// 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰 하나하나 동기적으로 실행됨
// hoisting: var, function declaration 자동적으로 가장 위로 올라가는 것

console.log('1');

// sync 순서대로 코드 실행
// async 비동기적으로 언제 코드가 실행될 지 예측할 수 없음

// astnc의 예시
// setTimeout 웹 api 브라우저에서 제공되어지는 api
// 지정한 시간이 지나면 전달한 콜백함수를 호출

// setTimeout(function() {
//     console.log('2');
// },1000);    // ms 기준

setTimeout(() => console.log('2'),1000);

console.log('3');

// 콜백 정리
// 여기에서 우리가 전달하는 함수는
// 바로 실행되는 것이 아니라 setTimeout 함수안에
// 하나의 파라미터 인자로 우리가 만든함수를 전달해줌
// 그래서 지금 실행하는 것이아니라 너가 1초가 지난 뒤에 내 함수를 실행해줘
// 내함수를 나중에 불러줘 라는 뜻으로 callback 함수라고 함
// arrow function으로 표현 가능

// Synchronous callback
// 즉각적으로 동기적으로 실행하는 callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
// 나중에 언제 실행될지 알 수 없는 callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// 모든 함수의 선언은 호이스팅!

console.clear();

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'koona' && password === 'cuty') ||
                (id === 'coder' && password === 'smart')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'koona'){
                onSuccess({name: 'koona', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 이 콜백지옥으로 체험해 볼 것
// 1. 사용자에게 id, password 입력받아오기
// 2. 서버에 로그인하기
// 3. 성공하면 로그인해서 받아온 사용자의 아이디를 이용해 역할을 요청해 받아오기
// 4. 성공하면 우리에게 사용자의 오브젝트가 만들어짐 -> 이름, 역할 출력해보기

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
            );
    },
    error => {console.log(error);}
);

// 콜백 지옥의 문제점
// 1. 가독성 떨어짐 이해가 어려움
// 2. 문제가 생겼을때 찾기 어려움
// 3. 유지보수도 어려움