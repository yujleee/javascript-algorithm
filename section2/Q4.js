/**
 * Q4. 점수 계산
 * 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 준다.
 * 1번 문제가 맞는 경우에는 1점으로 계산 => 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산
 * 연속으로 문제의 답이 맞는 경우 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산.
 * 틀린 문제는 0점.
 */

function solution(arr) {
  let answer = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      answer += count;
    } else {
      count = 0;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
