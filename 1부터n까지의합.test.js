// 자연수 n이 입력되면 1부터 n까지의 합을 출력하는 프로그램을 작성하세요
// 입력 예재 6
// 출력 예제 21

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
}

test('1부터 n까지의 합', () => {
  expect(solution(6)).toBe(21);
});
