/**
 * Q4. 졸업선물
 * 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 한다.
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하라.
 * 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있으며. 배송비는 할인에 포함되지 않는다.
 */

// 상품을 최대한 많은 학생들에게 주어야함!
// 상품가격+배송비 => 총비용. 총비용 기준으로 정렬
// 할인을 어디에 받을 것인가? => 모든 경우를 다 계산

function solution(m, product) {
  let answer = 0;
  const students = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < students; i++) {
    // i번째 상품을 할인받는다.
    let saledProduct = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < students; j++) {
      if (j !== i && product[j][0] + product[j][1] > saledProduct) break; // i제외
      if (j !== i && product[j][0] + product[j][1] <= saledProduct) {
        saledProduct -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
