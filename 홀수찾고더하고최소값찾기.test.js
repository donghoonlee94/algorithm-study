// 7개의 자연수가 주어질 때 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
// 예를들어 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85고 그 합은 256입니다.
// 이들 중 최소값은 41이 됩니다.

// 입력 예제 : 12, 77, 38, 41, 53, 92, 85
// 출력 예제 : 256, 41

const array1 = [12, 77, 38, 41, 53, 92, 85];

const isOdd = (num) => num % 2 === 1;

const getOddArray = (arr) => {
  return arr
    .map((num) => {
      if (isOdd(num)) return num;
    })
    .filter((value) => value);
};

function solution(arr) {
  const answer = [],
    oddArray = [];
  let total = 0;
  let min = Number.MAX_SAFE_INTEGER;

  arr.forEach((num) => {
    if (isOdd(num)) oddArray.push(num);
  });

  for (let i = 0; i < oddArray.length; i++) {
    total += oddArray[i];
    if (oddArray[i] < min) min = oddArray[i];
  }

  answer.push(total, min);

  return answer;
}

function solution1(arr) {
  const answer = [];
  const oddArray = getOddArray(arr);
  const total = oddArray.reduce((prev, cur) => prev + cur, 0);
  const min = Math.min.apply(null, oddArray);

  answer.push(total, min);

  return answer;
}

test('홀수찾고더하고최소값찾기', () => {
  expect(solution(array1)).toStrictEqual([256, 41]);
  expect(solution1(array1)).toStrictEqual([256, 41]);
});
