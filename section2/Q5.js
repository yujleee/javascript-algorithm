/**
 * Q5. 등수 구하기
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력
 * 같은 점수가 존재할 경우 동일 등수
 */

function solution(arr) {
  let answer = [];
  let rank = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) rank++;
    }
    answer.push(rank);
    rank = 1;
  }

  return answer;
}

function solution2(arr) {
  const n = arr.length;
  let answer = Array.from({ length: n }, () => 1); // 길이:n, 배열을 1로 초기화

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
let arr2 = [87, 87, 92, 100, 76];
console.log(solution(arr));
console.log(solution2(arr2));
