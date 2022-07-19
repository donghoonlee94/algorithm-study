const TEST_STR = 'COMPUTERPROGRAMMING';
const FIND_STR = 'R';

const solution = (str, findStr) => {
  let anwser = '';
  for (let x of str) {
    if (x === findStr) {
      anwser += x;
    }
  }

  return anwser.length;
};

const solution1 = (str, findStr) => {
  let anwser = 0;
  for (let x of str) {
    if (x === findStr) {
      anwser++;
    }
  }

  return anwser;
};

test('문자찾기', () => {
  expect(solution(TEST_STR, FIND_STR)).toBe(3);
  expect(solution1(TEST_STR, FIND_STR)).toBe(3);
});
