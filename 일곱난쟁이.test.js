// https://www.acmicpc.net/problem/2309

// 아홉개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르다.
// 가능한 정답이 여러기지인 경우에는 아무거나 출력한다. 일곱 난쟁이의 키의 합은 100이 된다. 답은 오른차순으로 출력한다.

// 입력 예제 1 : [20, 7, 23, 19, 10, 15, 25, 8, 13];
// 출력 예제 1 : [7, 8, 10, 13, 19, 20, 23];

const array = [13, 25, 23, 19, 10, 15, 7, 8, 20];

function getFilteredNewArray(total, originArray) {
  let answer;

  for (let i = 0; i < originArray.length; i++) {
    for (let j = 1; j < originArray.length; j++) {
      if (total - (originArray[i] + originArray[j]) === 100 && originArray[i] !== originArray[j]) {
        answer = originArray.filter((num) => num !== originArray[i] && num !== originArray[j]);
        break;
      }
    }
  }

  return answer;
}

function solution(arr) {
  const total = arr.reduce((prev, cur) => prev + cur, 0);
  return getFilteredNewArray(total, arr).sort((a, b) => a - b);
}

test('일곱난쟁이', () => {
  expect(solution(array)).toStrictEqual([7, 8, 10, 13, 19, 20, 23]);
});
