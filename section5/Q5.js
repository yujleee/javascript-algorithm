/**
 * Q5. 최대 매출
 * 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했다.
 * 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다.
 * 이때 K=3이면 12 15 11 20 25 10 20 19 13 15
 * 연속된 3일간의 최대 매출액은 11+20+25=56만원.
 */

// 슬라이딩 윈도우 O(n)
function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  // 슬라이딩 윈도우 초기 설정
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(sum, answer);
  }

  return answer;
}

// 이중for문 O(n^2)
function solution2(k, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < arr.length - k; i++) {
    sum = 0;

    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }

    answer = Math.max(sum, answer);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
console.log(solution2(3, a));
