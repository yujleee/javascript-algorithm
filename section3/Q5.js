/*
 * Q5. 문자열 압축
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우,
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램
 * 단 반복횟수가 1인 경우 생략

 */

function solution(s) {
  let answer = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count++;
    else {
      answer += `${s[i]}${count}`;
      count = 1;
    }
  }

  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
