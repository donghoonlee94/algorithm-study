function solution(a, b, c) {
  const temp = a < b ? a : b;

  return temp < c ? temp : c;
}

console.log(solution(20, 50, 70));
console.log(solution(6, 2, 70));
