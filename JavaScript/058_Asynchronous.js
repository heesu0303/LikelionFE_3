// 비동기 프로그래밍
// 동기 - 순차적
// 호준 : 청소기 돌리고(10시)
// 호준 : 빨래하고(11시)
// 호준 : 설거지하고(12시)
// 호준 : 요리한다(1시)

// 비동기 - 비순차적
// 호준 : 청소기 돌리고(10시)
// 호준 : 빨래하고(10시)
// 호준 : 설거지하고(10시)
// 호준 : 요리한다(10시)

// 비동기식 처리 코드

const one = '1';
const two = '2';
const three = '3';

console.log(one);

setTimeout(() => {
  console.log(two);
},1000);

console.log(three);

// 싱글스레드
// 일할 수 있는 녀석이 1명 -> js

// 멀티스레드
// 일할 수 있는 녀석이 여러명 -> 다른 언어 대부분이 지원함.