// 1. Use strict
// 바닐라 자바스크립트에서 쓰기, 실수 방지
'use strict';

// 2. let, rw(read/write)
// 옛날엔 var 사용 -> 쓰면 안됨 // 선언 전 값 할당 가능
// var hoisting : var를 어디에 선언하든 상관없이 항상 제일 위로 끌어 올려줌
// 블럭 스코핑도 무시함
let globalName = 'global name';
{
    let name = 'na young';
    console.log(name);
    name = 'Koo';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// 3. Constant, r(read only)
// 한 번 할당하면 값이 절대 안바뀜
// 특) 보안, 쓰레드 안정성, 실수 방지
// 변경되어서 좋을 이유가 없다면 const 사용하기
const dasInWeek = 7;
const maxNumber = 5;


// 정리
// Immutable Variable : premitive types, frozen objects (i.e. object.freeze())
// 데이터 자체를 절대 변경하지 못함
// Mutable Variable : all objects by default are mutable in JS
// 자바 스크립트는 기본적으로 모든 오브젝트가 변경 가능함


// 4. Variable type
// primitive, single item : number, string, boolean, null, undefined, symbol
// primitive 타입은 value로 값이 저장됨
// object, Box container
// object는 object가 가리키는 주소가 저장됨
// function, first-class function
const count = 17;   //integer number
const size = 17.1;  //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, Nan
// 연산할 때 값을 잘 확인하고 하기
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt 최근에 타입 추가됨 (chrome, safari에서만 지원됨), 아직 사용하지 않도록 하기
// 자바스크립트의 number는 (-2**53 ~ 2**53)
// 숫자 뒤에 n 붙이면 자동으로 bigInt로 타입 바뀜
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String
const char = 'c';   // 자바스크립트에서는 char도 string
const brendan = 'brendan';
const greeting = 'hello ' + brendan;    // (스트링과 변수) string 합치기
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`;   //template literals (string) // 많이 쓰임
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);    // 초간단
console.log('value: ' + helloBob + 'type:  + helloBob}'); // 위에거랑 같은 문장 // 복잡

// boolean
// false : 0, null, undefined, NaN, ' '(빈 스트링)
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 빈 값 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 선언되었지만 값이 지정되지 않음 
// 비어있는지 값이 있는지 정해지지 않음
let x = undefined;  // let x;   같은 표현
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects // 유용함
// 고유 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 사용
// string을 고유 식별자로 사용하면 다른 모듈, 파일에서도 동일한 식별자로 간주
// symbol은 동일 id로 심볼을 만들어도 두 심볼은 다름
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);    // 주어진 스트링에 상관없이 고유한 식별자를 만들 때 사용
// 주어진 스트링이 같을 때 동일한 심볼을 만들고 싶다면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);   //true
// 심볼은 바로 출력 안됨
// console.log(gSymbol1);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // description을 이용해 string으로 변환 후 출력

// object, real-life object, data structure
// 물건과 물체를 대표할 수 있는 박스 형태
const nayoung = { name: 'nayoung', age: 22};
nayoung.age = 23; // 내용물 변경 가능

// 5. Dynamic typing : dynamically typed language
// 선언할 때 어떤 타입인지 선언하지 않고 런타임동안 할당된 값에 따라 타입이 변경될 수 있음
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); 
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 숫자를 문자열로 변환하여 합침
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // 문자열을 나누라고 하면 숫자로 변환
console.log(`value: ${text}, type: ${typeof text}`);
// 다이나믹 타이핑으로 런타임 에러 자주 발생 -> 타입스크립트 탄생 = 자바스크립트 + 타입
