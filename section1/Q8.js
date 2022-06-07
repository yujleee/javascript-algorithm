/**
 * Q8. 일곱난쟁이
 * 아홉 명의 난쟁이 중 진짜 일곱 난쟁이를 찾아라.
 * 일곱 난쟁이의 키의 합은 100이다.
 */

function solution(arr) {
  let answer = [...arr];

  // 총 합 = 100
  const sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < answer.length; i++) {
    for (let j = 1; j < answer.length; j++) {
      // sum - (arr[i] + arr[j]) === 100
      if (sum === answer[i] + answer[j] + 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
