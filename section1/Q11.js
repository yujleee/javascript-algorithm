/**
 * Q11. 대문자 찾기
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내기
 * 문자열의 길이는 100을 넘지 않음
 */

function solution(s) {
  let answer = 0;

  // 아스키 코드 대문자 범위 65 ~ 90
  for (let i = 0; i < s.length; i++) {
    let num = s.charCodeAt(i);
    // if (s[i] === s[i].toUpperCase()) answer++;
    if (num >= 65 && num <= 90) answer++;
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
