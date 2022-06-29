/**
 * Q7. 아나그램
 * 아나그램은 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치할 때를 말한다.
 * 예) AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치함.
 * 즉 아나그램은 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것이다.
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하라. (대소문자 구분함)
 */

function solution(str1, str2) {
  let answer = 'YES';
  let check = new Map();

  for (let char of str1) {
    if (check.has(char)) check.set(char, check.get(char) + 1);
    else check.set(char, 1);
  }

  // str2 에 str1과 일하는 문자가 없을 경우 NO
  for (let char of str2) {
    if (!check.has(char) || check.get(char) === 0) return 'NO';
    check.set(char, check.get(char) - 1);
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
