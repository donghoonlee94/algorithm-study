// 대문자로 이루어진 영단어가 입력되면 단어에 포함된 A를 모두 #으로 바꾸어 출력하는 프로그램을 작성하세요.

// 입력 설명 : 첫번쨰 줄에 문자열이 입력된다.
// 출력 설명 : 첫번째 줄에 바뀐 단어를 출력한다.
// 입력 예제 : BANANA
// 출력 예제 : B#N#N#

const TEST_STR = 'BANANA';

const solution = (str) => {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      answer += '#';
    } else {
      answer += str[i];
    }
  }

  return answer;
};

const solution1 = (str) => {
  return str.replaceAll('A', '#');
};

test('A를#으로', () => {
  expect(solution(TEST_STR)).toBe('B#N#N#');
  expect(solution1(TEST_STR)).toBe('B#N#N#');
});
