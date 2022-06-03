/**
 * Q3. 연필 개수 구하기
 * 연필 1 다스는 12자루.
 * 학생 1인당 연필을 1자루씩 나누어 준다. N명이 학생이 있다고 할 때, 필요한 연필의 다스 수를 계산.
 */

function solution(n) {
  const bundle = 12;
  let answer;

  // 모든 학생이 받아야 하니 ceil로 올림
  answer = Math.ceil(n / bundle);

  return answer;
}

console.log(solution(178));
