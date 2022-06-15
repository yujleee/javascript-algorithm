/**
 * Q4. 가장 짧은 문자거리
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력
 */

function solution(s, t) {
  let answer = [];

  let current = 0;

  // 왼쪽부터 t와 비교
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) current = 0;
    else {
      current++;
    }
    answer.push(current);
  }

  // 오른쪽부터 t와 비교, 더 작은 값인 것을 교체
  for (let i = s.length; i > 0; i--) {
    if (s[i] === t) current = 0;
    else {
      current++;
    }

    if (answer[i] > current) answer[i] = current;
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
