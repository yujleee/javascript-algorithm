/**
 * Q6. 홀수
 * 7개의 자연수가 주어질 때 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
 * 고른 홀수들 중 최소값 찾기
 */

function solution(arr) {
  let answer = [];
  const odd = arr.filter((n) => n % 2 === 1);
  const sum = odd.reduce((a, b) => a + b, 0);
  const min = Math.min(...odd);

  answer.push(sum);
  answer.push(min);
  return answer;
}

function solution2(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }

  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
console.log(solution2(arr));
