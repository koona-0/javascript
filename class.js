'use strict';

// Object-oriented programming
// class: template
// Object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntectical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor 생성자
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const koona = new Person('koona', 22);
console.log(koona.name);
console.log(koona.age);
koona.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // 값을 리턴
    get age() {
        return this._age;
    }
    // 값을 설정
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
    // Getter와 Setter 안에 쓰이는 변수는 다르게
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// 추가된지 얼마 안됐기때문에 사용하는 사람이 많이 없음
// 추가되었다 정도 알기 
// 최신 브라우저에서도 지원이 안됨

class Experiment {
    publicField = 2;
    #privateField = 0;  // # 클래스 안에서만 접근 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon! 마찬가지
class Article {
    static publisher = 'Cuty Koona';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    
    static printPublisger() {
        console.log(Article.publisher);
    }
}
// 오브젝트에 상관없이 공통적인 것이 있을 때 사용
const article1 = new Article(1);
const article2 = new Article(2);
// 오브젝트 자리에 클래스 이름을 넣어야 출력 가능
// static은 오브젝트가 아닌 클래스에 붙어있기 때문
console.log(Article.publisher);
Article.printPublisger();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // overriding
    getArea() {
        return (this.width * this.height) /2;
    }
    draw(){
        super.draw();   // 부모에 정의한 것 유지
        console.log('▲');
    }
}

const rectangle = new Rectangle(20, 20, 'pink');
rectangle.draw();
console.log(rectangle.getArea());


const triangle = new Triangle(20, 20, 'yellow');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽의 인스턴스가 오른쪽 클래스의 인스턴스인지 아닌지 체크
console.log(rectangle instanceof Rectangle); 
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
// 자바스크립트에서 만든 모든 오브젝트 클래스들은 자바스크립트의 오브젝트를 상속한 것
console.log(triangle instanceof Object);    

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// 자바스크립트 내부에 포함되어있는 오브젝트들이 어떤것들이 있는지 볼 수 있음
