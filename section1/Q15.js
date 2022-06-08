/**
 * Q15. 가운데 문자 출력
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력
 */

function solution(s) {
  let answer = '';
  //   const word = Array.from(s);
  const mid = Math.floor(s.length / 2);

  s.length % 2 === 1 ? (answer += s.substr(mid, 1)) : (answer += s.substr(mid - 1, 2));
  //   word.length % 2 === 1 ? (answer += word.splice(mid, 1).join('')) : (answer += word.splice(mid - 1, 2).join(''));

  return answer;
}
console.log(solution('study'));
console.log(solution('rich'));
console.log(solution('good'));
