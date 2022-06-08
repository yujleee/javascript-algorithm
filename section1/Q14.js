/**
 * Q14. 가장 긴 문자열
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력
 */

function solution(s) {
  let answer = '';
  let max = s[0].length;

  s.forEach((word) => {
    if (word.length > max) {
      max = word.length;
      answer = word;
    }
  });

  return answer;
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good', 'imperfections'];
console.log(solution(str));
