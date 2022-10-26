/**
 * Q3. Special Sort
 * N개의 정수가 입력되면 입력된 값을 정렬.
 * 이때 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다.
 * 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
 */

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
