
// Q1. make a string out of an array
{
  const fruits1 = ['apple', 'banana', 'orange'];

  // let string1 = fruits1.toString();
  let string1 = fruits1.join(' '); // 인자로 구분자를 줄 수도 안줄 수도 있음
  console.log(string1);
  console.clear();
}


// Q2. make an array out of a string

{
  const fruits2 = '🍎, 🥝, 🍌, 🍒';
  let array2 = [];
  array2 = fruits2.split(', ');
  // string api 
  // split : 스트링 -> 배열
  // 첫 인자 구분자, 두번째 인자 배열 길이 (선택)
  console.log(array2);
  console.clear();

}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array3 = [1, 2, 3, 4, 5];
  console.log(array3.reverse());
  console.clear();
  // 주의 : 원본 배열 자체가 바뀜
}

// Q4. make new array without the first two elements
{
  const array4 = [1, 2, 3, 4, 5];
  let result = array4.slice(2);
  let result2 = array4.slice(2, 5);
  // array api 
  // slice : 배열 특정 부분 리턴
  // 첫 인자 시작 인덱스 (선택), 두번째 인자 종료 인덱스 exclusive함 자신 제외(선택)
  console.log(result);
  console.log(result2);
  console.clear();
}

//
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result5 = students.find((student) => student.score === 90);
  console.log(result5);
  // find : 콜백함수가 true가 되면 find 메소드가 멈추고 처음으로 true가 된 것 반환
  console.clear();
}

// Q6. make an array of enrolled students
{
  // const result6 = students.find((student) => student.enrolled === true);
  // console.log(result6);
  const result6 = students.filter((student) => student.enrolled);
  console.log(result6);
  // filter : 콜백함수가 true가 되는 것들 반환
  console.clear();
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result7 = students.map((student) => student.score);
  console.log(result7);
  // map : 배열 안의 인자를 사용할 때 유용
  console.clear();
}

// Q8. check if there is a student with the score lower than 50
{
  const result8 = students.some((student) => student.score < 50);
  console.log(result8);
  // some : 콜백함수를 만족하는 요소가 하나라도 있으면 true 반환

  const result8_2 = students.every((student) => student.score < 50);
  console.log(result8_2);
  // every : 모든 요소가 콜백함수를 만족해야 true 반환
  console.clear();
}

// Q9. compute students' average score
{
  // let sum = 0;
  // const result7 = students.map((student) => sum += student.score);
  // let average = sum/students.length;
  // console.log(average);

  // reduce : (누산기) 배열의 모든 요소의 값을 누적하는 것
  // const result9 = students.reduce((prev,curr) => {
  //   console.log('----------');
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0);  // 초기값 0으로 설정

  const result9 = students.reduce((prev, curr) => prev + curr.score, 0);  // 초기값 0으로 설정
  console.log(result9 / students.length);
  console.clear();

  // reduceRight : 순서가 거꾸로 되어 호출됨
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // const result10 = students.map((student) => student.score);
  // console.log(result10.join());

  //const result10 = students.map((student) => student.score).join();
  
  // 여기서 만약 점수 50점 이상인 친구들을 뽑고 싶다면
  const result10 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();

  console.log(result10);
  console.clear();

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const sortedResult = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();

    console.log(sortedResult);
  // sort : 정렬 a - b 오름차순 b - a 내림차순
}

// 헷갈리는거 api 찾아서 읽어보기!!