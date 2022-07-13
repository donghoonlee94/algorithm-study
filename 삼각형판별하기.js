// 최대 값을 제외한 두 값의 합이 최대값 보다 크면 true
// Math 내장 함수를 사용하지 않고 풀었음.

function solution1(a, b, c) {
  let biggestNum;
  const smallNumArray = [];

  if (a < b) {
    biggestNum = b;
    smallNumArray.push(a);
  } else {
    biggestNum = a;
    smallNumArray.push(b);
  }

  if (biggestNum < c) {
    smallNumArray.push(biggestNum);
    biggestNum = c;
  } else {
    smallNumArray.push(c);
  }

  return smallNumArray.reduce((prev, cur) => prev + cur) > biggestNum ? 'YES' : 'NO';
}

function solution2(a, b, c) {
  const biggestNum = Math.max(a, b, c);
  const total = a + b + c;
  const excludeBiggestNum = total - biggestNum;

  return excludeBiggestNum > biggestNum ? 'YES' : 'NO';
}

function solution3(a, b, c) {
  let biggestNum;
  const total = a + b + c;

  biggestNum = a > b ? a : b;
  biggestNum = biggestNum > c ? biggestNum : c;

  const excludeBiggestNum = total - biggestNum;

  return excludeBiggestNum > biggestNum ? 'YES' : 'NO';
}

console.log(solution1(13, 33, 17));
console.log(solution1(5, 7, 13));
console.log(solution1(25, 50, 73));

console.log(solution2(13, 33, 17));
console.log(solution2(5, 7, 13));
console.log(solution2(25, 50, 73));

console.log(solution3(13, 33, 17));
console.log(solution3(5, 7, 13));
console.log(solution3(25, 50, 73));
