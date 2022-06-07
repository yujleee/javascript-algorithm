/**
 * Q10. 문자 찾기
 * 한 개의 문자열과 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내기
 * 문자열의 길이는 100을 넘지 않음
 */

function solution(s, t) {
  let answer = 0;

  if (s.length > 100) return;

  for (char of s) {
    if (char === t) answer++;
  }

  return answer;
}

function solution2(s, t) {
  if (s.length > 100) return;

  // 해당하는 문자에서 자르기
  let answer = s.split(t).length;

  return answer - 1;
}

let str = 'COMPUTERPROGRAMMINGR';
console.log(solution(str, 'R'));
console.log(solution2(str, 'R'));
