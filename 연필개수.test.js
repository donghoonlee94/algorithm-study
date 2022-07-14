// 연필 1다스는 12자루며, 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생 수를 입력하면 필요한 연필의 다스 수를 계산하는 로직을 작성하세요.
// 입력예제 : 25
// 출력 예제 : 3

function solution(n) {
  return Math.ceil(n / 12);
}

test('연필 개수', () => {
  expect(solution(25)).toBe(3);
  expect(solution(178)).toBe(15);
});
