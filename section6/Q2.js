/**
 * Q2. 괄호 문자 제거
 *
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력
 */

// 닫는 괄호의 짝이 나올 때까지 pop.

function solution(s) {
  let answer;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      while (stack.pop() !== '(');
    } else stack.push(s[i]);
  }
  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
str = '(A(BC)D)EF(G(H))(K((IJ))M)J(G)Q';
console.log(solution(str));
