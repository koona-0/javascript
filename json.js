// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);
// 함수는 오브젝트에 있는 데이터가 아니기 때문에
// 함수는 json에 포함 안됨 
// 자바스크립트에만 있는 특별한 데이터도 포함되지 않음 ex) symbol

json = JSON.stringify(rabbit,['name']);
console.log(json);
// 원하는 속성만 JSON으로 변환됨

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'koona' : value;
});
console.log(json);
// JSON으로 변환되는 것을 조금 더 통제하고싶다면
// 콜백함수 사용


// 2. JSON to Object]
// parse(json)
console.clear();
json =JSON.stringify(rabbit);
console.log(json);

let obj = JSON.parse(json);
console.log(obj);

// 포인트!
rabbit.jump();
// obj.jump();

// 함수는 시리얼라이즈할때 포함되지 않았음!
// 변환한 오브젝트는 시리얼라이즈가 된 
// 즉 스트링으로 만들어진 json으로부터 다시 obj를 만들었기 때문에 
// json에서 obj를 만든것에는 jump 메소드 없음

// 포인트!
console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate());   // 스트링이기 때문에!@!@!@

obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

console.log(obj.birthDate.getDate());

// 정리
// JSON에는 stringify와 parse가 있다!
// 각각 콜백 함수를 전달해서 우리가 조금 더 세밀하게 무언가 통제할 수 있다!

// 유용한 사이트
// JSON Diff
// 서버에게 요청했을 때 첫번째로 받아온 데이터와
// 두번째로 받아온 데이터가 어떤게 다른지 잘 모를때 비교!
// 문제를 디버깅할때 유용

// JSON Beautifier
// 가끔 서버에서 받아온 json을 붙여넣으면 포멧이 망가지는 경우가 있음
// 비주얼스튜디오 코드에서 복붙해서 포멧하면 되지만
// 간단하게 웹사이트에서도 가능!

// JSON Parser
// json 파일을 obj로 확인해보고 싶을때 확인 가능

// JSON Validator
// json이 이상할때 확인 가능 어디가 잘못되었는지!