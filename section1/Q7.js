/**
 * Q7. 10부제
 * 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다. 
 * ex) 번호의 일의 자리 숫자: 7 => 7일, 17일, 27일에 운행 불가.
 * 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성.

 */

function solution(day, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
