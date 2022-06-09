/**
 * Q2. 보이는 학생
 * 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠다.
 * 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하라.
 * 앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않음

 */

function solution(arr) {
  let answer = 1; // 맨 앞 사람은 보임

  // O(n)
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
