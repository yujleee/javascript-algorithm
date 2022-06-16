/**
 * Q3. 멘토링
 * 선생님이 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정하려 한다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면,
 * A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 한다.
 * M번의 수학성적이 주어질 때 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지인지 출력.
 */

function solution(test) {
  let answer = 0;

  const m = test.length;
  const n = test[0].length;

  // 학생별 모든 경우의 수 4x4 = 16
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 경우의 수 생성
      let cnt = 0;

      // test 횟수만큼 따지기
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;

        // 학생별로 경우를 따짐
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++; // 등수가 멘토 < 멘티일 때 카운트 증가
      }
      if (cnt === m) answer++;
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
