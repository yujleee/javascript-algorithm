/*
 * Q2. 공통 원소 구하기
 * A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력
 */

// 투포인터 알고리즘
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr2[p2++]);
    } else {
      p1++;
    }
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
