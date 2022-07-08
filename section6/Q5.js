/**
 * Q5. 쇠막대기
 *
 * 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수를 구하는 프로그램
 */

// 여는괄호면 스택에 push
// 여는 괄호 다음으로 닫는 괄호라면 레이저. stack.pop , 스택 길이만큼 answer에 더한다.
// 레이저가 아니라면 한개의 막대기가 끝난 것이니 stack.pop, answer++

function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
      s[i - 1] === '(' ? (answer += stack.length) : (answer += 1);
    }
  }

  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));

a = '(((()(()()))(())()))(()())';
console.log(solution(a));
