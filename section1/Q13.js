/**
 * Q13. 대소문자 변환
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력
 */

function solution(s) {
  let answer = '';

  for (let char of s) {
    char === char.toUpperCase() ? (answer += char.toLowerCase()) : (answer += char.toUpperCase());
  }

  return answer;
}

console.log(solution('StuDY'));
