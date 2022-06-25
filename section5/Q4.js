/*
 * Q4. 연속 부분수열 2
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정 숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램
 * 만약 N=5, M=5이고 수열이 다음과 같다면 1 3 1 2 3
 * 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지.
 */

function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let p1 = 0;

  for (let p2 = 0; p2 < arr.length; p2++) {
    sum += arr[p2];

    while (sum > m) {
      sum -= arr[p1++];
    }
    answer += p2 - p1 + 1; // p1~p2 더함
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
