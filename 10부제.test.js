//  서울시는 6월 1일부터 교통혼잡을 막기 위해 자동차 10부제를 시행한다. 10부제는 자동차 번호의 일의자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다. 예를 들어 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다. 0이면 10일, 20일, 30일에 운행하지 못한다.

//  일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 날짜의 일의 자리 숫자가 주어지고, 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성해라.것이다

//  입력 설명 : 첫 줄에는 날짜의 일의 자리 숫자가 주어지고, 두번째 줄에는 7대의 자동차 번호의 끝 두 자리 숫자가 주어진다.것이다
//  출력 설명 : 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력

//  입력 예제 : 3, [25, 23, 11, 47, 53, 17, 33]
//  출력 예제 : 3

//  입력 예제 : 0, [12, 20, 54, 30, 87, 91, 30]
//  출력 예제 : 3,

const day1 = 3;
const day2 = 5;
const array1 = [25, 23, 11, 47, 53, 17, 33];
const array2 = [5, 15, 25, 15, 25, 90, 10];

function solution(day, arr) {
  return arr.filter((num) => num % 10 === day).length;
}

function solution1(day, arr) {
  const answer = [];

  arr.forEach((num) => {
    if (num.toString().includes(day)) answer.push(num);
  });

  return answer.length;
}

function solution2(day, arr) {
  let answer = 0;

  for (let num of arr) {
    if (num % 10 === day) answer++;
  }

  return answer;
}

test('10부제 solution1', () => {
  expect(solution(day1, array1)).toBe(3);
  expect(solution(day2, array2)).toBe(5);
});

test('10부제 solution2', () => {
  expect(solution1(day1, array1)).toBe(3);
  expect(solution1(day2, array2)).toBe(5);
});

test('10부제 solution2', () => {
  expect(solution2(day1, array1)).toBe(3);
  expect(solution2(day2, array2)).toBe(5);
});
