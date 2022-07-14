// 주어진 배열 안에 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// 입력 예제 : [5, 7, 1, 3, 2, 9, 11];
// 출력 예제 : 1

function solution(arr) {
  return Math.min(...arr);
}

function solution1(arr) {
  let anwser;

  for (let i = 0; i < arr.length; i++) {
    let temp;
    for (let j = 0; j < arr.length; j++) {
      if (temp) {
        if (arr[j] < temp) anwser = arr[j];
      } else {
        if (arr[i] < arr[j]) temp = arr[i];
      }
    }
  }

  return anwser;
}

function solution2(arr) {
  let anwser = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < anwser) anwser = arr[i];
  }

  return anwser;
}

const arr1 = [5, 7, 1, 3, 2, 9, 11];
const arr2 = [5, 3, 7, 11, 2, 15, 17];

test('최소값구하기 Math.min', () => {
  expect(solution(arr1)).toBe(1);
  expect(solution(arr2)).toBe(2);
});

test('최소값구하기 for', () => {
  expect(solution1(arr1)).toBe(1);
  expect(solution1(arr2)).toBe(2);
});

test('최소값구하기 for2', () => {
  expect(solution2(arr1)).toBe(1);
  expect(solution2(arr2)).toBe(2);
});
