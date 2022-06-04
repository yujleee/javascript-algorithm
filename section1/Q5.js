/**
 * Q5. 최솟값 구하기
 * 7개의 수가 주어질 때, 그 숫자 중 가장 작은 수를 출력
 */

function solution(arr) {
  let answer = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (answer > arr[i]) answer = arr[i];
  }

  return answer;
}

function solution2(arr) {
  let answer,
    // min = Math.min(...arr);
    min = Math.min.apply(null, arr);
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
console.log(solution2(arr));
