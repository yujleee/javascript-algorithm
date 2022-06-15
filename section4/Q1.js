/*
 * Q1. 자릿수의 합
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로.
 * 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력
 */

function solution(n, arr) {
  let answer,
    max = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    let temp = arr[i];

    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (max < sum) {
      max = sum;
      answer = arr[i];
    } else if (max === sum) {
      if (arr[i] > max) answer = arr[i];
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123, 560];
console.log(solution(8, arr));
