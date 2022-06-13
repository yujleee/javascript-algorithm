/**
 * Q3. 숫자만 추출
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수 만들기
 *  만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됨.
 */

function solution(str) {
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) answer += str[i];
  }

  return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
