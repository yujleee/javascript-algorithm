/**
 * Q9. A를 #으로
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력
 */

function solution(s) {
  let answer = Array.from(s);

  answer = answer.map((char) => {
    return char === 'A' ? '#' : char;
  });

  return answer.join('');
}

function solution2(s) {
  let answer = s;

  // /A/를 찾음 /g => 글로벌
  answer = answer.replace(/A/g, '#');

  return answer;
}

let str = 'BANANA';
console.log(solution(str));
console.log(solution2(str));
