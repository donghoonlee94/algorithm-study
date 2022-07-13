function solution(a, b, c) {
  let answer;

  const t = a < b ? a : b;

  return t < c ? t : c;
}

console.log(solution(20, 50, 70));
