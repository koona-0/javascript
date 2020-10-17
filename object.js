// Objects
// one of the JS's data types.
// a collection of ralated data and/or functionality.
// Nearly all objects in JS are instance of Object
// Object = { key : value };

// const name = 'koona';
// const age = 22;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

// 인자가 많아지게 되면 추가할 것들이 많아짐 -> 관리 힘듦
// 때문에 Object 이용

const obj1 = {}; // 오브젝트 만드는 법 1. 괄호 이용 'Object literal' syntax
const obj2 = new Object(); //오브젝트 만드는 법 2. 클래스 이용 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// 자바스크립트는 클래스 없어도 괄호를 이용해서 만들 수 있음
const koona = { name: 'koona', age: 22 };
print(koona);

// 자바스크립트는 runtime때 타입이 정해짐 -> 뒤늦게 property 추가 가능
koona.hasJob = true;
console.log(koona.hasJob);
// 이렇게 동적으로 코딩하면 유지보수가 어려움, 에러 발생률 증가
delete koona.hasJob;
console.log(koona.hasJob);
// 삭제도 가능

// 2. Computed properties
// key should be always string 
// 주의) 키는 항상 스트링!!
// 오브젝트는 .으로 접근 가능
// 또는 배열에서 값을 받아오는 것처럼 접근 가능
console.log(koona.name);
console.log(koona['name']);
koona['hasJob'] = true;
console.log(koona.hasJob);
// 코딩할 땐 . 쓰는게 맞음
// Runtime에 실시간으로 무엇을 가지고 올때 Computed properties 사용
function printValue(obj, key) {
    console.log(obj[key]);  // 여기서 .쓰면 에러남! 얘는 언제 어떤 키 받는지 모름
}
printValue(koona, 'name'); // 키는 항상 스트링!
printValue(koona, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 오브젝트를 필요할 때 일일히 만들게 되면 동일한 키와 값 반복해서 작성해야 함

// 함수 이용해서 값만 전달해주는 함수
// const person4 = makePerson('koona', 22);
// console.log(person4);
// function makePerson(name, age){
//     return{
//         name,   // name: name, -> Property value shorthand 키와 값이 이름이 같으면 생략 가능
//         age,
//     };
// }

// 4. Constructor Function
// 계산하지 않고 순수하게 오브젝트만 생성하는 함수는 대문자로 시작
// class의 constructor에서 했듯이
// 리턴으로 하지 않고 this 이용
// 호출도 클래스에서 오브젝트 만들듯이
const person4 = new Person('koona', 22);
console.log(person4);
function Person(name, age) {
    // this = {};
        this.name = name;
        this.age = age;
    // return this;
}   // 결국 this에 무언가를 넣고 this를 리턴하는 함수


// 5. in operator: property existence check (key in obj)
// 간단하게 키가 있는지 없는지 확인할 수 있는 키워드
console.log('name' in koona);
console.log('age' in koona);
console.log('random' in koona);
console.log(koona.random);  // 정의하지 않은 키 접근 -> undefined

// 콘솔 로그 삭제
console.clear();

// 6. for...in vs for...of
// for (key in obj)
// 오브젝트의 키들을 받아 처리
for (key in koona) {
    console.log(key);
}
// for (value in iterable)
// 오브젝트의 값들을 처리
const array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// 쉬운 버전
for ( value of array) {
    console.log(value);
}

// 7. Fuc cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])

const user = { name: 'koona', age: '22'};
const user2 = user;
// 둘이 가리키는 오브젝트의 주소가 같음
// user2의 값을 바꾸면 user의 값도 바뀜
// user2.name = 'coder';
console.log(user);

console.clear();

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object는 기본적으로 자바스크립트에 탑재되어있는 오브젝트중 하나
// 자바스크립트의 모든 오브젝트는 이것을 상속받음
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// 뒤에 있는 값들이 계속 덮어 씌워짐!


