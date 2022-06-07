/**
 * Q12. 대문자 통일
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력
 */

function solution(s) {
  let answer = '';
  const word = Array.from(s);

  answer = word.map((ch) => (ch !== ch.toUpperCase() ? ch.toUpperCase() : ch)).join('');

  return answer;
}

function solution2(s) {
  let answer = '';

  for (let ch of s) {
    let num = ch.charCodeAt();

    // 아스키 코드 소문자 97 ~ 122. 소문자에서 32를 빼면 대문자
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += ch;
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
console.log(solution2(str));
