/**
 * Q2. 유효한 팰린드롬
 * 팰린드롬 : 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열
 * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력
 * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않는다.
 * 알파벳 이외의 문자들은 무시함
 */

function solution(s) {
  let answer = 'YES';

  // [^a-z] ^=> 부정. a-z가 아닌 것들을 빈 문자열로 바꿈
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) answer = 'NO';

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
let str2 = 'level, eye, tomato';
console.log(solution(str));
console.log(solution(str2));
