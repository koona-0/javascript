'use strict';

// Promise is a JavaScript object for asyncronous operation.
// 자바스크립트 안에 내장된 오브젝트
// 비동기적 수행에서 콜백함수 대신 유용하게 사용 가능
// 두가지 포인트 : state 상태 성공했는지 실패했는지 이해
//              producer와 consumer 차이 알기
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 주의! 새로운 프로미스가 만들어질 때는 전달한 executor 함수가 자동으로 실행됨
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, files)
    // 네트워크에서 데이터를 받아오거나 파일에서 무언가 큰 데이터를 읽어오는 과정은 시간이 꽤 걸림
    // 이것을 동기적으로 하면 다음라인 코드가 실행이 안됨
    // 프로미스를 만들어 비동기적으로 처리하는 것이 좋음

    console.log('doing something...');
    setTimeout(() => {
        //resolve('koona');
        reject(new Error('no network'));
    }, 2000);
});
// 어떤 일을 2초정도 하다가 결국 잘 마무리해서 resolve 콜백함수를 호출하며 koona를 전달하는 promise 완성

// 2. Consumers: then, catch, finally로 값을 받아옴
promise
    // then: promise가 정상적으로 수행되어 마지막에 resolve라는 콜백함수를 통해 전달한 값이 value의 파라미터로 전달되어 들어옴
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    // finally: 성공할때도 실패했을때도 에러 콜백함수 처리된 후 finally 호출됨
    //          성공 실패에 상관없이 어떤 기능을 마지막으로 수행하고싶을 때 사용
    .finally(() => {
        console.log('finally');
    });
// then은 똑같은 프로미스 리턴 그 리턴된 프로미스에 catch 다시 호출 -> chaining


// 3. Promise chaining
// 서버에서 숫자를 받아오는 promise 예제
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

// 1이 전달됨
fetchNumber
    .then(num => num * 2)   // 1 * 2
    .then(num => num * 3)   // 2 * 3
    .then(num => {  // 6을 새로운 프로미스에 전달
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);   // 6 - 1
        });
    })
    .then(num => console.log(num)); // 5가 전달됨
// 총 2초 소요
// 주의! then은 값을 바로 전달할 수도 있고 프로미스를 전달할 수도 있음
// 이렇게 then을 여러개 이용해서 다른 비동기적인 것들을 묶어서 처리할 수 있음

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));   // 3초 소요

//한가지만 받아서 그대로 전달하는 경우는 생략 가능
getHen()
    .then(getEgg)
    // 계란을 받아오는것을 실패해도 빵을 받아와서 Promise chain이 실패하지 않고 처리할 수 있도록 함
    // 바로바로 뒤에 catch를 두어 에러 처리 가능
    .catch(error => {
        return '🥖';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);