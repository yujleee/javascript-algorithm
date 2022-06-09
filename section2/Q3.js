/**
 * Q3. 가위바위보
 * A, B 두 사람이 가위바위보 게임을 한다.
 * 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력하며 비길 경우에는 D를 출력.
 * 1:가위, 2:바위, 3:보

 */

function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) answer += 'A \n';
    else if (a[i] === b[i]) answer += 'D \n';
    else answer += 'B \n';
  }

  return answer;
}

let a = [2, 1, 3, 1, 3];
let b = [1, 3, 2, 2, 3];
console.log(solution(a, b));
