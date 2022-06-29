/**
 * Q6. 학급 회장
 * 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했다.
 * 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있다.
 * 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하라.
 * 반드시 한 명의 학급회장이 선출되는 투표결과가 나왔다고 가정함.
 */

function solution(s) {
  let answer;
  let voteResult = new Map();
  let max = 0;

  for (let vote of str) {
    if (voteResult.has(vote)) {
      voteResult.set(vote, voteResult.get(vote) + 1);
    } else {
      voteResult.set(vote, 1);
    }
  }

  voteResult.forEach((index, value) => {
    if (max < index) {
      max = Math.max(index, max);
      answer = value;
    }
  });

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
