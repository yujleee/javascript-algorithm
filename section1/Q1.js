/**
 * Q1. 세 수 중 최솟값
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램
 * (정렬을 사용하면 안됨)
 */

function solution(a, b, c) {
  let answer;

  a > b ? (answer = a) : (answer = b);

  return answer > c ? answer : (answer = c);
}

console.log(solution(2, 5, 1));
