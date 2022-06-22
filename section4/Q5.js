/**
 * Q5. K번째 큰 수
 * 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있다
 * 같은 숫자의 카드가 여러장 있을 수 있으며 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록한다.
 * 3장을 뽑을 수 있는 모든 경우를 기록한다. 기록한 값 중 K번째로 큰 수를 출력.
 * 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22.
 */

function solution(n, k, card) {
  let answer;
  let set = new Set(); // 중복 수 제거를 위한 set

  // 3장 뽑을 수 있는 모든 경우의 수 => for문 3번
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let sorted = Array.from(set).sort((a, b) => b - a);
  answer = sorted[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
