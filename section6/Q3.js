/**
 * Q3. 크레인 인형뽑기
 *
 * 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해
 * 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때,
 * 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성하기.
 * board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하.
 * board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
 * 0은 빈 칸을 나타냅니다.
 * 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
 * moves 배열의 크기는 1 이상 1,000 이하, 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
 */

// 1. moves에 있는 값의 행을 board 배열에서 확인한다.
// 2. 0이라면 아래 행으로. 만약 있다면 그 값을 스택으로 옮기고, 0으로 바꾼다.
// 3. 만약 스택으로 넣을 값 이전 값이 일치하면 둘 다 사라지고(pop) answer가 2 증가한다. 아니면 넣을 값을 스택에 넣는다.

function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let crane = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (crane === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(crane);
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
