/**
 * Q3. 삽입정렬
 *
 * N개의 숫자가 입력되면 오름차순으로 정렬하여 출력.
 * 정렬하는 방법은 삽입정렬
 */

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let j = i;
    while (arr[j] > arr[j + 1] && j >= 0) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--; // 이전 조건 한번 더 검사
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
