/**
 * Q1. 회문 문자열
 * 회문 문자열 : 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력
 * 단 회문을 검사할 때 대소문자를 구분하지 않음.
 */

function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();

  const mid = Math.round(s.length / 2);

  const len = s.length;
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[len - i - 1]) {
      answer = 'NO';
    }
  }

  return answer;
}

let str = 'goooG';
let str2 = 'loop';
console.log(solution(str));
console.log(solution(str2));
