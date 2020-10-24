'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['0']);
console.log(fruits['1']);
console.log(fruits['2']);
console.log(fruits[fruits.length - 1]); // 배열의 마지막 요소 찾을때 주로 이용

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);

}
// b. for of
for (let fruit of fruits){
    console.log(fruit); // fruits[fruit]가 아님! 조심...
}
// c. for each
// fruits.forEach(function (fruit, index) { // 인자 3개 (value, index, array) 받아오기
//     console.log(fruit, index);
// });
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍉');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍉');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// unshift, shift 는 push, pop보다 느리다! 
// 배열에 있는 데이터들 다 옮겨야 하니까
// 가능하면 푸시팝 쓰기
console.clear();

// splice : remove an item by index position
fruits.push('🍓', '🍉', '🍋');
console.log(fruits);
// fruits.splice(1);   // 파라미터 하나주면 그 인덱스 뒤로 모두 지움
// fruits.splice(1, 1);    // 인덱스 1부터 한개만 지우기 
fruits.splice(1, 1, '🍋', '🍇'); // 1부터 하나 지우고 뒤에 추가
console.log(fruits);
// @ 0개를 지우고 추가 가능!

// combine two arrays
const fruits2 = ['🍇', '🍒'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
// indexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));  // 인덱스 어디에 있는지
console.log(fruits.indexOf('🍉')); 
console.log(fruits.indexOf('🍒'));  // 없을 때 인덱스 번호 -1
// includes
console.log(fruits.includes('🍉')); // 인덱스에 존재하는지 
console.log(fruits.includes('🍒'));
// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('🍎');
console.log(fruits.lastIndexOf('🍎'));
// indexOf : 가장 첫번째 해당 인덱스를 만나면 이거 출력함
// lastIndexOf : 가장 마지막 해당 인덱스 출력