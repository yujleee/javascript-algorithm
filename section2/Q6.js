/**
 * Q6. 격자판 최대합
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력
 */

function solution(arr) {
  let answer = 0;
  const n = arr.length;
  let row = 0;
  let col = 0;

  for (let i = 0; i < n; i++) {
    row = col = 0;
    for (let j = 0; j < n; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }

    answer = Math.max(answer, row, col);
  }

  //   대각선만.
  row = col = 0;
  for (let i = 0; i < n; i++) {
    row += arr[i][i];
    col += arr[i][n - i - 1]; // 반대쪽 대각선
  }

  answer = Math.max(answer, row, col);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
