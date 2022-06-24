/*
 * Q3. 연속 부분수열 1
 * N개의 수로 이루어진 수열이 주어진다.
 * 이 수열에서 연속 부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램
 * 만약 N=8, M=6이고 수열이 다음과 같다면 1 2 1 3 1 1 1 2
 * 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지.

 */

function solution(m, arr) {
  let answer = 0;
  let p1 = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === m) answer++;
    while (sum >= m) {
      // m보다 sum이 큰 경우
      sum -= arr[p1++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
