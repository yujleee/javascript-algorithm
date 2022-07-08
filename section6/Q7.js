/**
 * Q7. 교육과정 설계
 *
 * 1년 과정의 수업 계획을 짜야 한다. 수업중에는 필수 과목이 있는데 이는 반드시 이수해야 하며 순서가 정해져 있다.
 * 만약 총 과목이 A, B, C, D, E, F, G가 있고, 필수과목이 CBA로 주어지면 필수과목은 C, B, A과목이며 이 순서대로 계획을 짜야 한다.
 * 과목은 무조건 이수한다고 가정하고 필수 과목 순서가 주어졌을 때 N개의 수업 설계가 잘 되었다면 'YES', 잘못 되었다면 'NO' 출력.
 */

// 큐에는 필수과목
// 필수과목이 계획중에 있는데 shift된게 불일치 -> NO
// 필수과목 빠진게 있어서 큐에 남아있음 -> NO

function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');

  for (let i = 0; i < plan.length; i++) {
    if (queue.includes(plan[i])) {
      if (plan[i] !== queue.shift()) return 'NO';
    }
  }
  if (queue.length > 0) return 'NO';

  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));

a = 'DCG';
b = 'ADBEC';
console.log(solution(a, b));
