/**
 * Q2. 버블 정렬
 *
 * N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하라.
 * 정렬하는 방법은 버블정렬.
 */

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
