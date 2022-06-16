/*
 * Q2. 뒤집은 소수
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수. => 23 출력
 * 첫 자리부터의 연속된 0은 무시한다.
 */

// 2이후로 판별하는 수까지 나눠보고 나머지가 0이 안나오면 소수.
function isPrime(num) {
  if (num === 1) return false;
  // 제곱근까지만 돌리면 for문의 반절만 돌려도 충분함 (뒤는 중복이기 때문에)
  for (let i = 2; i < Number(Math.sprt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let answer = [];

  // 숫자를 뒤집는다.
  // 뒤집은 수가 소수인지 확인.
  arr.forEach((e) => {
    const reverse = e.toString().split('').reverse().join('');
    const num = Number(reverse);

    if (isPrime(num)) answer.push(num);
  });

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
