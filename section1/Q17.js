/**
 * Q17. 중복 단어 제거
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력
 * 출력하는 문자열은 원래의 입력순서를 유지함

 */

function solution(s) {
  let answer = [];

  const set = new Set(s);
  answer = Array.from(set);

  return answer;
}

function solution2(s) {
  let answer;

  // filter는 return된 값들 중 참인 값들을 배열에 넣는다.
  answer = s.filter((v, i) => s.indexOf(v) === i);

  return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
console.log(solution2(str));
