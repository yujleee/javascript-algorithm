/**
 * Q7. 봉우리
 * 지도 정보가 N*N 격자판에 주어지고, 높이가 쓰여있을 때, 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.
 * 봉우리 지역이 몇 개 있는 지 알아내자.
 * 격자의 가장자리는 0으로 초기화 되었다고 가정.
 */

function solution(arr) {
  let answer = 0;
  let n = arr.length;

  // 네 방향 [left,bottom,right,top]
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1; // 봉우리 체크 flag

      // 방향별 탐색
      for (let k = 0; k < dx.length; k++) {
        let nx = i + dx[k]; //행
        let ny = j + dy[k]; //열

        // 가상으로 0으로 둘러쌓여있다고 가정 => 0 기준 비교 + 방향별 숫자와 현재 숫자 비교
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }

        if (flag) answer++;
      }
    }
    return answer;
  }
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
