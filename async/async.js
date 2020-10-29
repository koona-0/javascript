// async & await
// clear style of using promise
// 그렇다고 프로미스가 나쁘고 무조건 async와 await이 좋은 것이 아님!
// 프로미스를 유지해서 써야 맞는 경우, async와 await을 사용해야 더 깔끔한 경우 존재

// 1. async

// function fetchUser() {
//     // do network request in 10secs...
//     return 'koona';
// }

// 동기적이기 때문에 10초를 기다리고 다음줄 수행
// 뒤에 다른 기능들이 있다면 모두 기다려야함
// 이렇게 오래 걸리는 일들은 비동기적으로 처리해야함

// promise를 이용한 비동기 처리
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10secs...
//         resolve('koona');
//     })
// }
// const user = fetchUser();
// user.then(console.log);
// console.log(user);

// async로 더 간편하게 비동기 처리
async function fetchUser() {
    // do network request in 10secs...
    return 'koona';
}
const user = fetchUser();
user.then(console.log);
console.log(user);
// 함수 앞에 async 키워드를 붙이면
// 자동으로 함수 안의 코드들이 프로미스로 변환됨

console.clear();

// 2. await
// await 키워드는 async가 붙은 함수 안에서만 사용 가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    //throw 'error'; // 에러 처리하기위해 에러 발생시키기
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// 프로미스를 사용한 getBanana 함수
// function getBanana() {
//     return delay(1000)
//     .then(() => '🍌');
// }
// 체이닝보다 동기적인 코드를 쓰는 것처럼 만들 수 있음 / 쉽게 이해 가능

//프로미스를 사용한 pickFruits 함수
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }
// pickFruits().then(console.log);
// 마치 콜백지옥...
// 프로미스도 중첩되게 체이닝하면 콜백지옥같은 문제점 발생!

// async를 이용한 pickFruits 함수
// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log);

// try, catch 이용하여 에러 처리 -> 묶여있기 때문에 2초 기다리게 됨 -> 비효율
// async function pickFruits() {
//     try {
//         const apple = await getApple();
//         const banana = await getBanana();
//     } catch {}
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log);

// 프로미스를 이용해 await 병렬처리
// 1초 + 1초 = 2초  =>  1초, 1초 = 1초
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    // 프로미스는 만드는 순간 바로 프로미스 안 코드블럭 실행됨
    const apple = await applePromise;
    const banana = await bananaPromise;
    // 동기화 시킴
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
// 바나나를 딸 때와 사과가 필요없고
// 사과를 딸 때 바나나가 필요없을때
// 병렬적으로 기능을 수행할 수 있는 경우는 이렇게 사용하지 않음!

// 3. useful Promise API

// Promise.all: Promise배열을 전달하면 모든 프로미스들이 병렬적으로 다 받아질 때까지 기다려줌
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);