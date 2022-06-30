/**
 * Q8. 모든 아나그램
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램.
 * 아나그램 판별시 대소문자가 구분되며 부분문자열은 연속된 문자열이어야 한다.
 */

// 두 맵이 일치하는지 비교
function compareMap(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  let hashS = new Map();
  let hashT = new Map();

  for (let char of t) {
    if (hashT.has(char)) hashT.set(char, hashT.get(char) + 1);
    else hashT.set(char, 1);
  }

  // 슬라이딩 윈도우를 위한 셋팅
  for (let i = 0; i < t.length - 1; i++) {
    if (hashS.has(s[i])) hashS.set(s[i], hashS.get(s[i]) + 1);
    else hashS.set(s[i], 1);
  }

  // 슬라이딩 윈도우로 돌아가면서 비교
  let p1 = 0;
  for (let p2 = t.length - 1; p2 < s.length; p2++) {
    if (hashS.has(s[p2])) hashS.set(s[p2], hashS.get(s[p2]) + 1);
    else hashS.set(s[p2], 1);

    if (compareMap(hashS, hashT)) answer++;
    hashS.set(s[p1], hashS.get(s[p1]) - 1);
    if (hashS.get(s[p1]) === 0) hashS.delete(s[p1]);
    p1++;
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
