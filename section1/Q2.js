/**
 * Q2. 삼각형 판별하기
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어질 때,
 * 이 세 막대로 삼각형을 만들 수 있으면 “YES", 만들 수 없으면 ”NO"를 출력
 */

function solution(a, b, c) {
  let answer = 'YES';

  // 삼각형의 조건 : 세 변의 길이가 있을 때, '가장 긴 변의 길이 < 나머지 두 변의 길이' 여야 성립
  const total = a + b + c;
  const max = Math.max(a, b, c);

  if (max > total - max) answer = 'NO';

  return answer;
}

// other testcase : 13, 33, 17

console.log(solution(6, 7, 11));
