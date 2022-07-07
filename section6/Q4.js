/**
 * Q4. 후위 연산식
 *
 * 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램
 * 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
 */

// 숫자일 때는 push.
// 연산자일 경우 두 개의 숫자를 꺼내서 계산후 push

function solution(s) {
  let answer;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      stack.push(Number(s[i]));
    } else {
      const right = stack.pop();
      const left = stack.pop();

      switch (s[i]) {
        case '+':
          stack.push(left + right);
          break;
        case '-':
          stack.push(left - right);
          break;
        case '*':
          stack.push(left * right);
          break;
        case '/':
          stack.push(left / right);
          break;
      }
    }
  }
  answer = stack.pop();

  return answer;
}

let str = '352+*9-';
console.log(solution(str));
str = '472+*';
console.log(solution(str));
