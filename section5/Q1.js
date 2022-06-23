/*
 * Q1. 두 배열 합치기
 * 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력
 */

// 투포인터 알고리즘
function solution(arr1, arr2) {
  let answer = [];
  const n = arr1.length;
  const m = arr2.length;

  let p1 = 0;
  let p2 = 0;

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }

  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

// sort => nlogN
function solution2(arr1, arr2) {
  let answer = [];

  answer = [...arr1, ...arr2].sort((a, b) => a - b);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
console.log(solution2(a, b));
